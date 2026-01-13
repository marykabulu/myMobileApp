# Quick Start - Building for Android

## Fast Track to Build AAB

1. **Build and Sync:**
   ```bash
   npm run android:build
   ```

2. **Open in Android Studio:**
   ```bash
   npm run cap:open:android
   ```

3. **In Android Studio:**
   - Build → Generate Signed Bundle / APK
   - Select "Android App Bundle"
   - Create/select keystore
   - Build!

## App Configuration

- **Package Name:** `com.marykabulu.mymobileapp`
- **App Name:** "My Mobile App"
- **Version:** 1.0 (versionCode: 1, versionName: "1.0")

## Next Steps

See `ANDROID_BUILD_GUIDE.md` for detailed instructions on:
- Creating a keystore
- Publishing to Google Play Store
- App store listing requirements
- Testing and deployment

