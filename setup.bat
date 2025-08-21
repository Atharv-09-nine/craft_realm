@echo off
echo ========================================
echo   CodeCrafts Adventures Setup
echo ========================================
echo.

echo Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please download and install Node.js from: https://nodejs.org/
    echo Then run this setup script again.
    pause
    exit /b 1
)

echo Node.js found! Version:
node --version

echo.
echo Installing dependencies...
echo This may take a few minutes...
npm install

if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies!
    echo Please check your internet connection and try again.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   Setup Complete! 
echo ========================================
echo.
echo To start the development server, run:
echo   npm run dev
echo.
echo Then open your browser to: http://localhost:3000
echo.
pause