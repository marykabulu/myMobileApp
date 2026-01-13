#!/bin/bash
# Open Android Studio with the Android project
cd "$(dirname "$0")"
"/c/Program Files/Android/Android Studio/bin/studio64.exe" "$(pwd)/android" &

