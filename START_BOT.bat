@echo off
title [CarzDev] Bot Runner
color 0a

cls
echo.
echo   /$$$$$$   /$$$$$$  /$$$$$$$  /$$$$$$$$       /$$$$$$$  /$$$$$$$$ /$$    /$$
echo  /$$__  $$ /$$__  $$| $$__  $$|_____ $$       | $$__  $$| $$_____/| $$   | $$
echo | $$  \__/| $$  \ $$| $$  \ $$     /$$/       | $$  \ $$| $$      | $$   | $$
echo | $$      | $$$$$$$$| $$$$$$$/    /$$/        | $$  | $$| $$$$$   |  $$ / $$/
echo | $$      | $$__  $$| $$__  $$   /$$/         | $$  | $$| $$__/    \  $$ $$/ 
echo | $$    $$| $$  | $$| $$  \ $$  /$$/          | $$  | $$| $$        \  $$$/  
echo |  $$$$$$/| $$  | $$| $$  | $$ /$$$$$$$$      | $$$$$$$/| $$$$$$$$   \  $/   
echo  \______/ |__/  |__/|__/  |__/|________/      |_______/ |________/    \_/                                                                      
echo.
echo =================================================================
echo  Lancement du Bot Discord V2...
echo =================================================================
echo.

:: Lance la commande définie dans "scripts" -> "start" du package.json
call npm start

:: Si le bot s'arrête (crash ou CTRL+C), on change la couleur en rouge et on pause
color 0c
echo.
echo =================================================================
echo  [ARRET] Le bot s'est arrete. Voir l'erreur ci-dessus.
echo =================================================================
pause