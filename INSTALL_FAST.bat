@echo off
title [CarzDev] Installing Dependencies...
color 0b

echo.
echo =====================================================
echo   INSTALLATION DES DEPENDANCES
echo   Architecture - CarzDev
echo =====================================================
echo.

:: Vérification de Node.js
node -v >nul 2>&1
if %errorlevel% neq 0 (
    color 0c
    echo [ERREUR] Node.js n'est pas installe !
    echo Installe-le depuis https://nodejs.org/
    pause
    exit
)

:: Vérification du package.json
if not exist "package.json" (
    color 0c
    echo [ERREUR] Fichier package.json introuvable !
    echo Place ce fichier dans le meme dossier que ton bot.
    pause
    exit
)

echo [1/2] Nettoyage du cache rapide...
:: Optionnel : on ne vide pas tout le cache pour garder la vitesse, juste les temporaires
if exist "node_modules" (
    echo       Mise a jour des modules existants...
) else (
    echo       Installation fraiche...
)

echo [2/2] Telechargement (No Audit / No Fund)...
:: LA COMMANDE MAGIQUE POUR LA VITESSE
call npm install --no-audit --no-fund --loglevel=error --prefer-online

if %errorlevel% neq 0 (
    color 0c
    echo.
    echo [ECHEC] Une erreur est survenue pendant l'installation.
    pause
    exit
)

color 0a
echo.
echo =====================================================
echo   SUCCES ! TOUT EST PRET.
echo   Tu peux lancer START_BOT.bat
echo =====================================================
timeout /t 3 >nul