# Android Build Guide for Google Play Store

This guide will help you build and publish your Ionic Angular app to the Google Play Store.

## Prerequisites

1. **Android Studio** - Download and install from [developer.android.com](https://developer.android.com/studio)
2. **Java Development Kit (JDK)** - JDK 17 or higher
3. **Android SDK** - Installed via Android Studio
4. **Google Play Developer Account** - Required for publishing ($25 one-time fee)

## Build Steps

### 1. Build Production Version

```bash
npm run build -- --configuration production
```

### 2. Sync Capacitor

```bash
npx cap sync android
```

### 3. Open in Android Studio

```bash
npx cap open android
```

Or manually open: `myMobileApp/android` folder in Android Studio

### 4. Build Android App Bundle (AAB)

**Option A: Using Android Studio (Recommended)**
1. Open the project in Android Studio
2. Go to **Build** → **Generate Signed Bundle / APK**
3. Select **Android App Bundle**
4. Create or select a keystore (you'll need this for updates!)
5. Fill in the keystore information
6. Select **release** build variant
7. Click **Finish**
8. The AAB file will be generated in `android/app/release/`

**Option B: Using Command Line**

First, create a keystore (if you don't have one):
```bash
cd android/app
keytool -genkey -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-key-alias
```

Then create a `keystore.properties` file in `android/` directory:
```
storePassword=your-store-password
keyPassword=your-key-password
keyAlias=my-key-alias
storeFile=app/my-release-key.jks
```

Update `android/app/build.gradle` to use the keystore:
```gradle
android {
    ...
    signingConfigs {
        release {
            def keystorePropertiesFile = rootProject.file("keystore.properties")
            def keystoreProperties = new Properties()
            if (keystorePropertiesFile.exists()) {
                keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
                storeFile file(keystoreProperties['storeFile'])
                storePassword keystoreProperties['storePassword']
                keyAlias keystoreProperties['keyAlias']
                keyPassword keystoreProperties['keyPassword']
            }
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            ...
        }
    }
}
```

Build the AAB:
```bash
cd android
./gradlew bundleRelease
```

The AAB will be at: `android/app/build/outputs/bundle/release/app-release.aab`

## Publishing to Google Play Store

### 1. Create Google Play Developer Account
- Go to [play.google.com/console](https://play.google.com/console)
- Pay the $25 registration fee
- Complete your developer profile

### 2. Create New App
- Click **Create app**
- Fill in app details:
  - App name: "My Mobile App" (or your preferred name)
  - Default language: English
  - App or game: App
  - Free or paid: Choose accordingly

### 3. Set Up App Store Listing
- **App icon**: 512x512px PNG (create from your assets)
- **Feature graphic**: 1024x500px PNG
- **Screenshots**: At least 2 screenshots (phone: 16:9 or 9:16)
- **Short description**: Brief description (80 chars max)
- **Full description**: Detailed description
- **Privacy Policy**: Required (create one or use a generator)

### 4. Upload AAB
- Go to **Production** → **Create new release**
- Upload your `.aab` file
- Add release notes
- Review and roll out

### 5. Content Rating
- Complete the content rating questionnaire
- Required for all apps

### 6. App Access
- If your app uses sensitive permissions, you may need to fill out forms

### 7. Pricing & Distribution
- Set pricing (Free or Paid)
- Select countries for distribution
- Accept terms

### 8. Review & Publish
- Review all sections
- Click **Start rollout to Production**
- Your app will be reviewed (usually 1-3 days)

## Important Notes

### App Signing
- **Keep your keystore safe!** You'll need it for all future updates
- Store it securely (password manager, secure backup)
- If you lose it, you cannot update your app

### Version Management
- Update `versionCode` (integer) in `android/app/build.gradle` for each release
- Update `versionName` (string) for user-facing version
- Version code must always increase

### Permissions
Your app currently uses:
- `INTERNET` - Required for API calls

If you add features, you may need additional permissions.

### Testing
Before publishing:
1. Test on multiple Android devices/versions
2. Test all features thoroughly
3. Use Google Play's internal testing track first
4. Consider beta testing with a small group

## Troubleshooting

### Build Errors
- Ensure Android SDK is properly installed
- Check Java version (JDK 17+)
- Clean build: `cd android && ./gradlew clean`

### Sync Issues
- Run `npx cap sync android` after any web changes
- Ensure `www` folder exists after building

### Keystore Issues
- Never commit keystore files to git
- Add `*.jks` and `keystore.properties` to `.gitignore`

## Resources

- [Capacitor Android Documentation](https://capacitorjs.com/docs/android)
- [Google Play Console Help](https://support.google.com/googleplay/android-developer)
- [Android App Bundle Guide](https://developer.android.com/guide/app-bundle)

