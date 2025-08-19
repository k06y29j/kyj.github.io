/**
 * JavaScript 异步编程示例
 * 展示了三种不同的异步编程方式：回调、Promise 和 Async/await
 */

// 导入文件系统模块
const fs = require('fs').promises;  // 使用 promises API
const fsCallback = require('fs');   // 使用传统回调 API

// 定义要读取的文件名
const filename = 'example.txt';

// 创建示例文件
console.log('创建示例文件...');
try {
  fsCallback.writeFileSync(filename, '这是一个示例文件内容，用于演示异步读取操作。');
} catch (err) {
  console.error('创建示例文件失败:', err);
  process.exit(1);
}

console.log('\n--- 三种异步编程方式演示 ---\n');

// 1. 基于回调的方式
console.log("1. 基于回调的方式:");
fsCallback.readFile(filename, 'utf8', (err, content) => {
  // 在读取文件时激活回调，可能得过一会才读取文件
  if (err) {
    console.error('回调方式出错:', err);
    return;
  }
  console.log('回调方式读取结果:', content);
});
console.log('这里的代码会在等待读取文件的期间被执行');

// 2. 基于 Promise 的方式
console.log('\n2. 基于 Promise 的方式:');
fs.readFile(filename, 'utf8')
  .then((content) => {
    // 读取文件时发生的事
    console.log('Promise方式读取结果:', content);
  })
  .catch((err) => {
    console.error('Promise方式出错:', err);
  });
console.log('这里的代码会在等待读取文件的期间被执行');

// 3. Async/await 方式
console.log('\n3. Async/await 方式:');
async function readFileAsync(filename) {
  try {
    const content = await fs.readFile(filename, 'utf8');
    console.log('Async/await方式读取结果:', content);
  } catch (err) {
    console.error('Async/await方式出错:', err);
  }
}

// 执行异步函数
readFileAsync(filename);
console.log('这里的代码会在等待读取文件的期间被执行');

// 添加一个清理函数，在演示完成后删除示例文件
setTimeout(() => {
  console.log('\n清理示例文件...');
  try {
    fsCallback.unlinkSync(filename);
    console.log('示例文件已删除');
  } catch (err) {
    console.error('删除文件时出错:', err);
  }
}, 3000); // 等待3秒，确保所有异步操作完成