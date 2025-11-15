# Portfolio Setup Script
Write-Host "=== Portfolio Setup & Fix Script ===" -ForegroundColor Cyan
Write-Host ""

# Change to project directory
Set-Location "d:\my project\PortfolioNew\Portfolio\frontend\my-app"

# Remove node_modules and reinstall with correct versions
Write-Host "Cleaning up dependencies..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Remove-Item "node_modules" -Recurse -Force
    Write-Host "✓ Removed node_modules" -ForegroundColor Green
}

if (Test-Path "package-lock.json") {
    Remove-Item "package-lock.json" -Force
    Write-Host "✓ Removed package-lock.json" -ForegroundColor Green
}

Write-Host ""
Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install

Write-Host ""
Write-Host "Installing Tailwind CSS properly..." -ForegroundColor Yellow
npm install -D tailwindcss@3.4.0 postcss@8.4.0 autoprefixer@10.4.0

Write-Host ""
Write-Host "Starting development server..." -ForegroundColor Green
Write-Host "Portfolio will be available at: http://localhost:3000" -ForegroundColor White
Write-Host "Test page will be available at: http://localhost:3000/test" -ForegroundColor White
Write-Host ""

npm run dev
