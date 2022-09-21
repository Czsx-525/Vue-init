# 使用手册

## 1 概述

**安硕移动应用开发框架V2.1**

本框架主要用于 Hybrid App 开发，如果工程是以小程序的方式运行在移动门户App上，请移步至[http://192.168.60.26/AMES/AMES2.0/ames-mobile](http://192.168.60.26/AMES/AMES2.0/ames-mobile) 查看文档。

框架操作手册：[http://192.168.60.26/AMES/AMES2.0/ames-security/H5-security-demo](http://192.168.60.26/AMES/AMES2.0/ames-security/H5-security-demo)

## 2 核心包介绍

app/libs下面

#### amarbridge-release.aar
工程核心包，里面包含 JSBridge、插件化架构、webview环境 <br />

> 注意，此aar包是来自 H5-security-demo 工程中的 amarbridge模块

`如何得到此aar？` <br />
下载 http://192.168.60.26/AMES/AMES2.0/ames-security/H5-security-demo 工程

里面有amarbridge模块，打包aar即可。

#### amarnetwork-release.aar
网络模块基础包，里面封装了网络接口，包括post、get、上传下载等。

基于 OkHttp3 + retrofit + rxJava

#### amarutils-release.aar
util基础工具包，很多模块都依赖它，必须导入。

#### amarview-release.aar
视图组件基础包，封装有loading、dialog等基础视图组件，必须导入。

#### amarzxing-release.aar
二维码扫描工具包，需要二维码扫描功能就导入。

#### camera-release.aar
拍照插件，支持多拍，需要就导入（本地相机只支持单拍）

#### compressor-release.aar
压缩插件，支持图片和视频压缩

#### filebox-release.aar
文件管理器，需要就导入，支持文件浏览、多选，仿小米文件管理器界面

#### gallery-release.aar
图片库，显示图片和视频，支持多选

#### recording-release.aar
录音插件，支持mp3、wav、amr、aac、pcm

#### video-release.aar
视频拍摄插件，支持mp4格式

#### amarsecurity-release.aar
移动安全核心包，里面封装了常用的算法，安全检查Helper类

## 3 AndroidManifest.xml
```java
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    package="{{packageId}}"> // 包ID

    <!-- Permissions -->
    <uses-permission android:name="android.permission.INTERNET" /> <!-- Camera, Photos, input file -->
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" /> <!-- Geolocation API -->
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

    <uses-feature android:name="android.hardware.location.gps" /> <!-- Network API -->
    <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION"/>

    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" /> <!-- Navigator.getUserMedia -->
    <!-- Video -->
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.FLASHLIGHT" />

    <uses-feature android:name="android.hardware.camera.autofocus" /> <!-- Audio -->
    <uses-permission android:name="android.permission.RECORD_AUDIO" />
    <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
    <uses-permission android:name="android.permission.READ_PHONE_STATE" />

    <!-- 这个权限用于获取wifi的获取权限，wifi信息会用来进行网络定位-->
    <uses-permission android:name="android.permission.CHANGE_WIFI_STATE" />

    <application
        android:allowBackup="false"             // 应用是否可以备份，最好是false，禁止备份
        tools:replace="android:allowBackup"
        android:icon="@mipmap/ic_launcher"      // 启动图标
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"  // 启动图标
        android:supportsRtl="true"               // 是否支持文本从右到左，主要是为了少数国家弄的，不用管
        android:requestLegacyExternalStorage="true"
        android:usesCleartextTraffic="true"
        android:theme="@style/Theme.AppCompat.DayNight.NoActionBar">
        <activity
            android:name=".MainActivity" // 程序入口
            android:configChanges="orientation|keyboardHidden|keyboard|screenSize|locale|smallestScreenSize|screenLayout|uiMode"
            android:launchMode="singleTask"
            android:theme="@style/AppTheme.NoActionBarLaunch"> // 启动应用的theme
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>

        <provider
            android:name="androidx.core.content.FileProvider"
            android:authorities="${applicationId}.fileprovider"
            android:exported="false"
            android:grantUriPermissions="true">
            <meta-data
                android:name="android.support.FILE_PROVIDER_PATHS"
                android:resource="@xml/file_paths" />
        </provider>
    </application>

</manifest>
```

>  启动应用默认的启动页是 res/drawable目录下的screen图片，可以自己修改，最好找UI设计不同尺寸的

```xml
    <style name="AppTheme.NoActionBarLaunch" parent="Theme.AppCompat.NoActionBar">
        <item name="android:windowBackground">@drawable/screen</item>
        <item name="windowActionBar">false</item>
        <item name="windowNoTitle">true</item>
    </style>
```

## 4 app/build.gradle
```groovy
apply plugin: 'com.android.application'
apply from: '../ames.gradle'

android {
    compileSdkVersion 30
    buildToolsVersion "30.0.3"

    defaultConfig {
        applicationId "{{packageId}}" // 包ID，唯一标识应用，类似com.amarsoft.mobile.app1
        minSdkVersion 23
        targetSdkVersion 30
        versionCode 1
        versionName "1.0"

        testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"
    }

    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }
    sourceSets {
        main {
            res.srcDirs = ['src/main/res']
            jniLibs.srcDirs = ['libs']
        }
    }
}

dependencies {
    implementation fileTree(dir: 'libs', include: ['*.jar', '*.aar']) // 导入aar包必须配的
    // 其他依赖，最好都加上
    implementation "androidx.appcompat:appcompat:1.3.0"
    implementation "com.google.android.material:material:1.3.0"
    implementation "androidx.constraintlayout:constraintlayout:2.0.4"
    implementation "com.squareup.retrofit2:retrofit:2.9.0"
    implementation "com.squareup.retrofit2:converter-gson:2.9.0"
    implementation "io.reactivex.rxjava2:rxjava:2.2.21"
    implementation "io.reactivex.rxjava2:rxandroid:2.1.1"
    implementation "com.squareup.retrofit2:adapter-rxjava2:2.9.0"
    implementation "com.googlecode.mp4parser:isoparser:1.1.22"
    implementation "androidx.legacy:legacy-support-v4:1.0.0"
    implementation "androidx.exifinterface:exifinterface:1.3.2"
    implementation "com.github.CymChad:BaseRecyclerViewAdapterHelper:3.0.4"
    implementation "org.greenrobot:eventbus:3.1.1"
    implementation "androidx.recyclerview:recyclerview:1.2.1"
    implementation "com.github.bumptech.glide:glide:4.11.0"
    annotationProcessor "com.github.bumptech.glide:compiler:4.0.0"
    implementation "com.github.chrisbanes.photoview:library:1.2.4"
    implementation "com.github.castorflex.smoothprogressbar:library:1.1.0"
    implementation "net.lingala.zip4j:zip4j:2.9.0"
    implementation "com.alibaba:fastjson:1.2.78"
    testImplementation "junit:junit:4.12"
    androidTestImplementation "androidx.test.ext:junit:1.1.2"
    androidTestImplementation "androidx.test.espresso:espresso-core:3.3.0"
}
```

## 5 MainActivity
整个程序的入口，代码基本不用动

```java
import android.os.Bundle;
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

        H5SecurityHelper h5SecurityHelper = H5SecurityHelper.getInstance(getApplicationContext());
        // 获取需要打开的资源文件
        // 先查看是否有加密zip包
        if (H5SecurityHelper.hasSecureZip(getApplicationContext())) {
            // 应用私有空间中不存在解压文件，再去解压H5资源包
            if (!H5SecurityHelper.getInstance(getApplicationContext()).hasIndexHtmlInH5Dir()) {
                try {
                    // copy zip 文件到应用私有空间
                    h5SecurityHelper.copySecureZip();
                    // 然后解密解压zip文件
                    h5SecurityHelper.decryptH5Zip();
                } catch (IOException e) {
                    e.printStackTrace();
                    Toast.makeText(getApplicationContext(), "H5资源文件解密出现异常!", Toast.LENGTH_LONG).show();

                    return;
                }
            }

            // 核对该资源包中是否有入口文件index.html
            if (!H5SecurityHelper.getInstance(getApplicationContext()).hasIndexHtmlInH5Dir()) {
                Toast.makeText(getApplicationContext(), "dist中没有找到入口文件index.html!", Toast.LENGTH_LONG).show();
                return;
            }

            // 存在，证明解压过zip文件，直接加载资源即可
            appConfig = new HpkConfigUtil(h5SecurityHelper.getDistPath() + File.separator + "app.config.json");
            bridgeBuilder.setHpkResDir(h5SecurityHelper.getDistPath());
        } else {
            // 没有dist.zip, 则项目没有做H5加密
            // 找dist目录下是否存在index.html
            if (H5SecurityHelper.hasAssetsRes(getApplicationContext())) {
                appConfig = new HpkConfigUtil(getAssets(), "app/dist/app.config.json");
                // 默认所有资源文件都放在dist目录下，index.html文件是入口文件，app.config.json是配置文件
                bridgeBuilder.setHpkResDir("app/dist");
            } else {
                Toast.makeText(getApplicationContext(), "没有找到入口文件index.html!", Toast.LENGTH_LONG).show();
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

        // 检测，如果是模拟器环境退出应用；如果手机被root退出
//        if (PhoneUtils.isVirtual() || PhoneUtils.isDeviceRooted()) {
//            finish();
//        }

        // 检查签名是否被修改，需要提前得到正确签名的hashCode，替换"0"，放开被注释的代码
        // 如果签名文件被修改，就证明在重打包，有风险
//        if (PhoneUtils.getSignature(getApplicationContext()) != 0) {
        // 杀死当前进行，相当于退出app
//            android.os.Process.killProcess(android.os.Process.myPid());
//        }

        // 防止进程动态调试，正式环境开启，开发环境不要打开
//        if (!BuildConfig.DEBUG) {
//            DebuggerUtils.checkDebuggableInNotDebugModel(getApplicationContext());
//        }

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
```

## 6 如何把此工程修改为一个正常可用的Android工程
本工程不能直接运行，因为packageId需要手动设置好！

#### 修改1
app/build.gradle -> applicationId "{{packageId}}"  该ID需要设置

#### 修改2
app/src/main/AndroidManifest.xml -> package="{{packageId}}" 该ID需要设置

#### 修改3
app/src/main/res/values/strings.xml -> <string name="app_name">{{appName}}</string> 
 
 {{appName}} 换成自己的

#### 修改4
app/src/main/java MainActivity 
```java
package {{packageId}}; // 修改包名，并创建目录，把MainActivity放到对应目录下
// 比如 package com.amarsoft.mobile.app1;
// MainActivity就要放在app/src/main/java/com/amarsoft/mobile/app1/ 目录下

```

#### 前端资源存放位置
将前端资源文件都放到 app/src/main/assets/app/dist/ 目录下

入口文件index.html必须存在

index.html同级放app.config.json文件，里面是H5配置

## 其他
其他情况请联系 柴攀峰（pfchai@amarsoft.com）


