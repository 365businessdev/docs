Write-Host "Update gems . . ."
try {
    bundle update
} catch {
    Write-Host "[ERROR]" -ForegroundColor Red
}
Write-Host "[OK]" -ForegroundColor Green

Write-Host "Build website . . ."
try {
    bundle exec jekyll build
} catch {
    Write-Host "[ERROR]" -ForegroundColor Red
}
Write-Host "[OK]" -ForegroundColor Green

Write-Host "Copy website to publish path . . ."
try {
    $null = Copy-Item -Path .\_site\* -Destination ..\gh-pages -Recurse -Force
} catch {
    Write-Host "[ERROR]" -ForegroundColor Red
}
Write-Host "[OK]" -ForegroundColor Green

Write-Host "Publish website . . ."
try {
    Set-Location ..\gh-pages
    git add .
    git commit -m $("Site updated at " + (Get-Date -UFormat "%m/%d/%Y %R %Z"))
    git push origin master --force
    Set-Location ..\docs
} catch {
    Write-Host "[ERROR]" -ForegroundColor Red
}
Write-Host "[OK]" -ForegroundColor Green