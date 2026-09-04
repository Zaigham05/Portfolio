@echo off
echo ========================================================
echo   Auto-Syncing Portfolio to GitHub & Live Website...
echo ========================================================
echo.

cd /d "%~dp0"

echo [1/4] Gathering modified, added, and deleted files...
git add .

echo [2/4] Committing local changes...
git commit -m "Auto update portfolio website"

echo [3/4] Pulling latest remote updates from GitHub...
git pull origin main --rebase

echo [4/4] Pushing to GitHub (Zaigham05/Portfolio)...
git push origin main

echo.
echo ========================================================
echo   SUCCESS! Your portfolio has been pushed to GitHub.
echo   GitHub Pages will update your live site in 10 seconds!
echo ========================================================
echo.
pause
