@echo off
echo ========================================
echo    JavaScript 开发环境启动器
echo ========================================
echo.

echo 检查Node.js安装...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ 错误：未找到Node.js
    echo 请访问 https://nodejs.org/ 下载并安装Node.js
    pause
    exit /b 1
)

echo ✅ Node.js已安装
node --version

echo.
echo 选择要运行的操作：
echo 1. 运行主程序 (index.js)
echo 2. 运行测试 (test.js)
echo 3. 开发模式 (自动重启)
echo 4. 退出
echo.

set /p choice="请输入选择 (1-4): "

if "%choice%"=="1" (
    echo.
    echo 🚀 运行主程序...
    node index.js
) else if "%choice%"=="2" (
    echo.
    echo 🧪 运行测试...
    node test.js
) else if "%choice%"=="3" (
    echo.
    echo 🔄 启动开发模式...
    echo 按 Ctrl+C 停止
    node --watch index.js
) else if "%choice%"=="4" (
    echo 再见！
    exit /b 0
) else (
    echo 无效选择，请重新运行脚本
)

echo.
pause
