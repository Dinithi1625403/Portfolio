@echo off
echo Starting Portfolio Development Server...
echo.

cd /d "d:\my project\PortfolioNew\Portfolio\frontend\my-app"

echo Installing dependencies if needed...
call npm install

echo.
echo Starting development server...
echo Portfolio will be available at: http://localhost:3000
echo Press Ctrl+C to stop the server
echo.

call npm run dev

pause
