# Maestro Disabled Button Bug
Repo to reproduce a Maestro bug on Android where if you specify that a button is visible, but disabled Android will fail the test. This works as expected on iOS.
=======

## Building the App
This assumes that you have an environment that is setup to run a RN 0.77 application with Ruby, Cocoapods, Java 17, and suitable NodeJS.

1. Install dependencies with `npm install`
2. Build the iOS application `npm run ios`
3. Build the Android application `npm run android`

You should now have `android/` and `ios` directories with built applications in your simulator/device and emulator/device.

## Running the Test

### Running on iOS
1. Get the ID of the device you installed the application on via `xcrun xctrace list devices`
2. Use the ID in the following command `maestro --device <device-id-goes-here> test maestro/disabledButton.yaml`
3. Flow passes

### Running on Android
1. Get the ID of the device you installed the application on via `adb devices`
2. Use the ID in the following command `maestro --device <device-id-goes-here> test maestro/disabledButton.yaml`
3. Flow fails when trying to find a visible button that is disabled
```
