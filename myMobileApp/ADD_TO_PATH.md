# How to Add Android Studio to PATH on Windows

## Method 1: Using System Settings (Recommended)

1. **Open System Properties:**
   - Press `Win + X` and select **System**
   - OR Right-click **This PC** → **Properties**
   - OR Press `Win + R`, type `sysdm.cpl`, press Enter

2. **Open Environment Variables:**
   - Click **Advanced system settings** (left sidebar)
   - Click **Environment Variables** button (bottom)

3. **Edit PATH:**
   - Under **System variables**, scroll and find **Path**
   - Select it and click **Edit**
   - Click **New**
   - Add this path: `C:\Program Files\Android\Android Studio\bin`
   - Click **OK** on all dialogs

4. **Restart your terminal/IDE** for changes to take effect

## Method 2: Using Command Line (PowerShell as Administrator)

```powershell
# Open PowerShell as Administrator, then run:
[Environment]::SetEnvironmentVariable(
    "Path",
    [Environment]::GetEnvironmentVariable("Path", "Machine") + ";C:\Program Files\Android\Android Studio\bin",
    "Machine"
)
```

## Method 3: Using Command Prompt (as Administrator)

```cmd
setx /M PATH "%PATH%;C:\Program Files\Android\Android Studio\bin"
```

**Note:** After adding to PATH, restart your terminal/IDE.

## Verify It Works

After adding to PATH and restarting, test with:
```bash
studio64.exe --version
```

## Important Note

Your Android Studio installation appears incomplete (missing plugins directory). You may need to:
1. Reinstall Android Studio completely
2. OR use the Start Menu shortcut instead
3. OR launch from: `C:\Users\mkabu\AppData\Local\Programs\Android Studio\bin\studio64.exe` (if installed there)

