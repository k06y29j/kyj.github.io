// JavaScript开发环境示例文件
console.log('🎉 JavaScript环境已成功运行！');

// 基本变量声明
const name = 'JavaScript';
let version = 'ES2022';
var message = `欢迎使用${name} ${version}`;

console.log(message);

// 函数示例
function greet(name) {
    return `你好，${name}！`;
}

// 箭头函数示例
const add = (a, b) => a + b;

// 数组操作
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const sum = numbers.reduce((acc, n) => acc + n, 0);

console.log('原始数组:', numbers);
console.log('翻倍后:', doubled);
console.log('总和:', sum);

// 对象示例
const person = {
    name: '张三',
    age: 25,
    city: '北京',
    sayHello() {
        console.log(`${this.name}说：你好！`);
    }
};

person.sayHello();

// 异步函数示例
async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('异步数据获取成功！');
        }, 1000);
    });
}

// 使用异步函数
async function main() {
    console.log('开始获取数据...');
    const data = await fetchData();
    console.log(data);
    console.log('程序执行完成！');
}

main();

// 错误处理示例
try {
    const result = 10 / 0;
    console.log('结果:', result);
} catch (error) {
    console.error('发生错误:', error.message);
} finally {
    console.log('错误处理完成');
}
