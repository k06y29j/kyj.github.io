# JavaScript 开发环境

这是一个完整的JavaScript开发环境，包含了运行JavaScript文件所需的所有配置和示例。

## 📋 环境要求

- **Node.js** (推荐版本 16.0 或更高)
- **npm** (Node.js包管理器，通常随Node.js一起安装)

## 🚀 快速开始

### 1. 检查Node.js安装

首先确认您的系统已安装Node.js：

```bash
node --version
npm --version
```

如果未安装，请访问 [Node.js官网](https://nodejs.org/) 下载并安装。

### 2. 运行JavaScript文件

#### 运行主程序
```bash
npm start
# 或者
node index.js
```

#### 运行测试
```bash
npm test
# 或者
node test.js
```

#### 开发模式（自动重启）
```bash
npm run dev
```

### 3. 直接运行任意JS文件

```bash
node your-file.js
```

## 📁 文件结构

```
├── package.json      # 项目配置文件
├── index.js          # 主程序文件（包含各种JavaScript示例）
├── test.js           # 测试文件
└── README.md         # 说明文档
```

## 💡 示例功能

`index.js` 文件包含了以下JavaScript功能的示例：

- ✅ 变量声明 (const, let, var)
- ✅ 模板字符串
- ✅ 函数和箭头函数
- ✅ 数组操作 (map, reduce, filter)
- ✅ 对象和方法
- ✅ 异步编程 (async/await)
- ✅ 错误处理 (try/catch)

## 🔧 自定义开发

### 创建新的JavaScript文件

1. 在项目根目录创建新的 `.js` 文件
2. 编写您的JavaScript代码
3. 使用 `node filename.js` 运行

### 添加依赖包

```bash
npm install package-name
```

### 安装开发依赖

```bash
npm install --save-dev package-name
```

## 🌟 常用命令

| 命令 | 说明 |
|------|------|
| `node index.js` | 运行主程序 |
| `node test.js` | 运行测试 |
| `npm start` | 启动项目 |
| `npm test` | 运行测试 |
| `npm run dev` | 开发模式（自动重启） |

## 📚 学习资源

- [JavaScript MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
- [Node.js官方文档](https://nodejs.org/docs/)
- [ES6+ 新特性](https://es6.ruanyifeng.com/)

## 🐛 故障排除

### 常见问题

1. **'node' 不是内部或外部命令**
   - 确保已正确安装Node.js
   - 检查环境变量PATH设置

2. **权限错误**
   - 在Windows上以管理员身份运行命令提示符
   - 在Linux/Mac上使用 `sudo`

3. **模块未找到**
   - 运行 `npm install` 安装依赖
   - 检查 `package.json` 文件

## 📞 支持

如果您遇到任何问题，请检查：
1. Node.js版本是否兼容
2. 文件路径是否正确
3. 代码语法是否有误

---

🎉 **现在您可以开始编写和运行JavaScript代码了！**
