# Portfolio Build Check Script
Write-Host "=== Portfolio Build Check ===" -ForegroundColor Cyan
Write-Host ""

# Change to project directory
Set-Location "d:\my project\PortfolioNew\Portfolio\frontend\my-app"

Write-Host "Checking project structure..." -ForegroundColor Yellow
if (Test-Path "src/app/page.js") {
    Write-Host "✓ Main page exists" -ForegroundColor Green
} else {
    Write-Host "✗ Main page missing" -ForegroundColor Red
}

if (Test-Path "src/components/sections") {
    Write-Host "✓ Components directory exists" -ForegroundColor Green
} else {
    Write-Host "✗ Components directory missing" -ForegroundColor Red
}

if (Test-Path "src/data/portfolioData.js") {
    Write-Host "✓ Portfolio data file exists" -ForegroundColor Green
} else {
    Write-Host "✗ Portfolio data file missing" -ForegroundColor Red
}

if (Test-Path "tailwind.config.js") {
    Write-Host "✓ Tailwind config exists" -ForegroundColor Green
} else {
    Write-Host "✗ Tailwind config missing" -ForegroundColor Red
}

Write-Host ""
Write-Host "Running lint check..." -ForegroundColor Yellow
npm run lint

Write-Host ""
Write-Host "Attempting to build project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✓ Build successful! Portfolio is ready." -ForegroundColor Green
    Write-Host ""
    Write-Host "To start development server:" -ForegroundColor White
    Write-Host "  npm run dev" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "To start production server:" -ForegroundColor White
    Write-Host "  npm start" -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "✗ Build failed. Please check the errors above." -ForegroundColor Red
}

Write-Host ""
Write-Host "Build check complete!" -ForegroundColor Cyan
