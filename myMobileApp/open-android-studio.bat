@echo off
REM Open Android Studio with the Android project
cd /d "%~dp0"

REM Try multiple possible locations
if exist "C:\Program Files\Android\Android Studio\bin\studio64.exe" (
    start "" "C:\Program Files\Android\Android Studio\bin\studio64.exe" "%~dp0android"
) else if exist "%LOCALAPPDATA%\Programs\Android Studio\bin\studio64.exe" (
    start "" "%LOCALAPPDATA%\Programs\Android Studio\bin\studio64.exe" "%~dp0android"
) else (
    echo Android Studio not found in common locations.
    echo Please check your installation or use Start Menu to open Android Studio,
    echo then File -^> Open and navigate to: %~dp0android
    pause
)

