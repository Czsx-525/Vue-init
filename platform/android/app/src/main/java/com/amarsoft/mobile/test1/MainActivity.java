package com.amarsoft.mobile.test1;

import android.content.Context;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.view.View;
import android.widget.Toast;

import com.amarsoft.mobile.ames.amarbridge.activity.BridgeActivity;
import com.amarsoft.mobile.ames.amarbridge.core.Bridge;
import com.amarsoft.mobile.ames.amarnetwork.AmarNetwork;
import com.amarsoft.mobile.ames.amarutils.common.HpkConfigUtil;
import com.amarsoft.mobile.ames.amarutils.common.SSLUtils;
import com.amarsoft.mobile.ames.amarutils.common.TrustAllSSL;
import com.amarsoft.mobile.ames.amarview.dialog.DialogX;
import com.amarsoft.mobile.ames.security.H5SecurityHelper;
import com.amarsoft.mobile.ames.security.PhoneEnvCheckHelper;
import com.bumptech.glide.Glide;

import java.io.File;
import java.io.IOException;

/**
 * 资源文件都放到 app/src/assets/app/dist 下面
 * 如果对资源文件加了密，就把dist.zip放到 app/src/assets/app 目录下
 * <p>
 * 1.启动图片设置
 * <item name="android:windowBackground">@drawable/screen</item>
 * 启动需要提前给好启动背景图片，各个尺寸都需要，目前给了一张例子放res/drawable下，
 * 后续还需要drawable-hdpi,drawable-mdpi,drawable-xhdpi,drawable-xxhdpi,drawable-xxxhdpi
 * <p>
 * 2.自定义插件配置
 * plugins = new ArrayList<>();
 * 以此方式 plugins.add(Plugin.class) 将插件放进ArrayList中即可
 * <p>
 * 3.初始化网络模块
 * AmarNetwork.Config().baseUrl("https://app.amarsoft.com/")
 * 替换https://app.amarsoft.com为项目的即可，其他配置请自行定义。
 * 如果需要定义信任证书等，咨询移动框架团队。
 * <p>
 * 4.安全检测
 * 1 -> 检测是否是模拟器环境，或者是被root过的真机环境
 * 2 -> 校验签名是否是正确的，有没有被重新签名过
 * 3 -> 正式环境下打开防进程动态调试
 * <p>
 * 5.代码混淆（aar中已做过代码混淆）
 * 如果涉及自定义插件内容，再根据情况是否做代码混淆
 */

public class MainActivity extends BridgeActivity {

    /**
     * 以下代码展示了如何对加密好的zip进行解密
     * 具体逻辑就是将apk包中assets/app目录下的dist.zip 解密 解压
     * 至 data/data/包名/h5dir/dist下面
     * 重新定义资源文件路径，让webView可以访问到
     */

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        File h5Dir = getDir("h5dir", Context.MODE_PRIVATE);
        File h5zip = new File(h5Dir, "dist.zip");
        File dist = new File(h5Dir, "dist");

        // 获取需要打开的资源文件
        // 先查看是否有加密zip包
        if (H5SecurityHelper.hasSecureZip(getApplicationContext())) {
            // 应用私有空间中不存在解压文件，再去解压H5资源包
            if (!H5SecurityHelper.hasIndexHtmlInH5Dir(h5Dir)) {
                try {
                    // copy zip 文件到应用私有空间
                    H5SecurityHelper.copySecureZip(getApplicationContext(), h5zip);
                    // 然后解密解压zip文件到h5dir
                    H5SecurityHelper.decryptH5Zip(h5zip, h5Dir);
                    boolean del = h5zip.delete();
                } catch (IOException e) {
                    Log.e("MainActivity", e.getMessage());
                    Toast.makeText(getApplicationContext(), "H5资源文件解密出现异常!", Toast.LENGTH_LONG).show();
                    return;
                }
            }

            // 核对该资源包中是否有入口文件index.html
            if (!H5SecurityHelper.hasIndexHtmlInH5Dir(dist)) {
                Toast.makeText(getApplicationContext(), "dist中没有找到入口文件index.html!", Toast.LENGTH_LONG).show();
                return;
            }

            // 存在，证明解压过zip文件，直接加载资源即可
            appConfig = new HpkConfigUtil(dist.getAbsolutePath() + File.separator + "app.config.json");
            bridgeBuilder.setHpkResDir(dist.getAbsolutePath());
        } else {
            // 没有dist.zip, 则项目没有做H5加密
            // 找dist目录下是否存在index.html
            if (H5SecurityHelper.hasAssetsRes(getApplicationContext()) || H5SecurityHelper.hasAppConfig(getApplicationContext())) {
                appConfig = new HpkConfigUtil(getAssets(), "app/dist/app.config.json");
                // 默认所有资源文件都放在dist目录下，index.html文件是入口文件，app.config.json是配置文件
                bridgeBuilder.setHpkResDir("app/dist");
            } else {
                Toast.makeText(getApplicationContext(), "没有找到入口文件 index.html 或 app.config.json", Toast.LENGTH_LONG).show();
                return;
            }
        }

        // 此处添加其他插件, 需要在init方法之前
        // Ex: bridgeBuilder.addPlugin(TotallyAwesomePlugin.class);
        // 初始化页面布局
        this.init();
        // 初始化布局后在创建bridge，加载web
        bridge = bridgeBuilder
                .setConfig(appConfig)
                .setWebView(webView)
                .setStartUrl(Bridge.DEFAULT_SERVER_URL) // 默认入口地址 https://localhost/ 可以修改
                .build();

        // webView开始加载
        bridge.loadWebView();

        // 初始化网络模块
        AmarNetwork.init(getApplicationContext());
        AmarNetwork.Config().baseUrl("https://app.amarsoft.com/")
                //配置读取超时时间，单位秒
                .readTimeout(30)
                //配置写入超时时间，单位秒
                .writeTimeout(30)
                //配置连接超时时间，单位秒
                .connectTimeout(30)
                //配置请求失败重试次数
                .retryCount(3)
                //配置请求失败重试间隔时间，单位毫秒
                .retryDelayMillis(1000)
                //配置主机证书验证
                .hostnameVerifier(new TrustAllSSL.TrustAllHostnameVerifier())
                //配置SSL证书验证
                .SSLSocketFactory(SSLUtils.getSslSocketFactory(null, null, null));
        DialogX.init(getApplicationContext());

        /****************** 安全检测 ***************/

        // 获取签名文件的hashcode，需要提前在app/build.gradle中配置好
        /**
         *     signingConfigs {
         *         release {
         *             try {
         *                 storeFile file("../h5security.jks")
         *                 storePassword "amarsoft"
         *                 keyAlias "h5security"
         *                 keyPassword "amarsoft"
         *             } catch (ex) {
         *                 throw new InvalidUserDataException(ex.toString())
         *             }
         *         }
         *     }
         */

        // 应用有两个签名文件 debug和release
        // 我们通过gradle工具 Tasks -> android -> signingReport 得到各个版本的签名的SHA1和SHA256
        String code = PhoneEnvCheckHelper.getSHA1Signature(getApplicationContext());
        Log.e("Main", "当前签名: " + code);
        // DD0C85268B5035669055022FC1E84FD02C96A6D9 此SHA1值是签名文件h5security.jks的
        if (!"DD0C85268B5035669055022FC1E84FD02C96A6D9".equals(PhoneEnvCheckHelper.getSHA1Signature(getApplicationContext()))) {
            Toast.makeText(getApplicationContext(), "签名被篡改, 即将退出", Toast.LENGTH_LONG).show();
            new Handler().postDelayed(new Runnable() {
                @Override
                public void run() {
//                    finish();
                }
            }, 3000);
        }
    }

    /**
     * 设置webview加载过程中用于遮挡白屏的图片
     */
    @Override
    protected void setSplashView() {
        super.setSplashView();
        Glide.with(getApplicationContext())
                .load(R.drawable.splash)
                .into(webViewSplash);
    }

    @Override
    public void hideSplashView() {
        super.hideSplashView();
        runOnUiThread(() -> webViewSplash.setVisibility(View.GONE));
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
    }
}