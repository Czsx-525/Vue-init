#<基本指令>
-optimizationpasses 5
-dontskipnonpubliclibraryclassmembers
-dontoptimize
-optimizations !code/simplification/cast,!field/*,!class/merging/*
-keepattributes *Annotation*,InnerClasses
-keepattributes Signature
-keepattributes SourceFile,LineNumberTable

-ignorewarnings

#记录生成的日志数据,gradle build时在本项目根目录输出apk 包内所有 class 的内部结构
-dump class_files.txt
#未混淆的类和成员
-printseeds seeds.txt
#列出从 apk 中删除的代码
-printusage unused.txt
#混淆前后的映射
-printmapping mapping.txt
#</基本指令>

#<基础>
-keep public class * extends android.app.Activity
-keep public class * extends android.app.Application
-keep public class * extends android.app.Service
-keep public class * extends android.content.BroadcastReceiver
-keep public class * extends android.content.ContentProvider
-keep public class * extends android.app.backup.BackupAgentHelper
-keep public class * extends android.preference.Preference
-keep public class * extends android.view.View
-keep class android.support.** {*;}
#</基础>

#<view相关>
-keep public class * extends android.view.View{
    *** get*();
    void set*(***);
    public <init>(android.content.Context);
    public <init>(android.content.Context, android.util.AttributeSet);
    public <init>(android.content.Context, android.util.AttributeSet, int);
}
-keepclasseswithmembers class * {
    public <init>(android.content.Context, android.util.AttributeSet);
    public <init>(android.content.Context, android.util.AttributeSet, int);
}
-keepclassmembers class * {
   public void *(android.view.View);
}
#</view相关>

#<Serializable、Parcelable>
-keepclassmembers class * implements java.io.Serializable {
    static final long serialVersionUID;
    private static final java.io.ObjectStreamField[] serialPersistentFields;
    private void writeObject(java.io.ObjectOutputStream);
    private void readObject(java.io.ObjectInputStream);
    java.lang.Object writeReplace();
    java.lang.Object readResolve();
}
-keep public class * implements java.io.Serializable {*;}

-keep class * implements android.os.Parcelable {
  public static final android.os.Parcelable$Creator *;
}
#</Serializable、Parcelable>

#<R文件>
-keep class **.R$* {
 *;
}
#</R文件>

#<enum>
-keepclassmembers enum * {
    public static **[] values();
    public static ** valueOf(java.lang.String);
}
#</enum>

#<natvie>
-keepclasseswithmembernames class * {
    native <methods>;
}
#</natvie>

#---------------------------------基本指令以及一些固定不混淆的代码--结束-----------

#---------------------------------第三方包混淆（暴力一点就都不混淆）-------------------------------

# 除了项目目录，其他都不混淆
-keep class !com.amarsoft.mobile.** {*;}

#---------------------------------一些不要混淆的代码(如反射、js)---------------------
# 不混淆自定义插件的代码
-keep class * extends com.amarsoft.mobile.ames.amarbridge.core.Plugin
-keep class * extends com.amarsoft.mobile.ames.security.sns.SecurityNativeSupport
# 保留注解
-keepclassmembers class * {
    @com.amarsoft.mobile.ames.amarbridge.annotation.PluginMethod <methods>;
}
-keep class com.amarsoft.mobile.ames.amarbridge.core.MessageHandler

# 保持测试相关的代码
-dontnote junit.framework.**
-dontnote junit.runner.**
-dontwarn android.test.**
-dontwarn android.support.test.**
-dontwarn org.junit.**
-dontwarn com.baidu.**
-dontwarn com.tencent.**
-dontwarn okhttp3.**
-dontwarn okio.**