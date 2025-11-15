# Portfolio Development Server Startup Script
Write-Host "=== Portfolio Development Server ===" -ForegroundColor Cyan
Write-Host ""

# Change to project directory
Set-Location "d:\my project\PortfolioNew\Portfolio\frontend\my-app"

# Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install

# Start development server
Write-Host ""
Write-Host "Starting development server..." -ForegroundColor Green
Write-Host "Portfolio will be available at: http://localhost:3000" -ForegroundColor White
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor White
Write-Host ""

npm run dev
