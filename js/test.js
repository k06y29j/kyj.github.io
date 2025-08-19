// 测试文件
console.log('🧪 开始运行测试...');

// 测试基本功能
function testBasicFeatures() {
    console.log('测试基本功能...');
    
    // 测试变量声明
    const testVar = '测试变量';
    console.log('✓ 变量声明:', testVar);
    
    // 测试模板字符串
    const template = `这是一个${testVar}`;
    console.log('✓ 模板字符串:', template);
    
    // 测试数组方法
    const arr = [1, 2, 3];
    const filtered = arr.filter(x => x > 1);
    console.log('✓ 数组过滤:', filtered);
    
    console.log('基本功能测试完成！');
}

// 测试异步功能
async function testAsyncFeatures() {
    console.log('测试异步功能...');
    
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve('异步测试成功'), 500);
    });
    
    const result = await promise;
    console.log('✓ 异步功能:', result);
}

// 运行所有测试
async function runAllTests() {
    testBasicFeatures();
    await testAsyncFeatures();
    console.log('🎉 所有测试完成！');
}

runAllTests();
