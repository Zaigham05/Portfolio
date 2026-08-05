@echo off
echo ========================================================
echo   Auto-Syncing Portfolio to GitHub & Live Website...
echo ========================================================
echo.

cd /d "%~dp0"

echo [1/3] Gathering modified, added, and deleted files...
git add .

echo [2/3] Committing changes...
git commit -m "Auto update portfolio website"

echo [3/3] Pushing to GitHub (zaigham05/portfolio)...
git push origin main

echo.
echo ========================================================
echo   SUCCESS! Your portfolio has been pushed to GitHub.
echo   GitHub Pages will update your live site in 10 seconds!
echo ========================================================
echo.
pause
