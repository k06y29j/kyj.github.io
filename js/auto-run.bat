@echo off
echo 自动保存并运行 debug.js 脚本
echo 按 Ctrl+C 退出

:loop
node d:\js\debug.js
timeout /t 2 >nul
goto loop