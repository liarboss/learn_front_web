// 1. 引入express
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
app.get('/server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    response.send("Hello Ajax");
});
app.post('/server', (request, response) => {
    // 设置响应头, 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    response.send("Hello Ajax POST");
});

//可以接收任意类型的请求 
app.all('/server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头 允许接收所有请求头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应体
    response.send('HELLO AJAX POST');
});

app.all('/json-server', (request, response) => {
    // 设置响应头, 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应头, 设置允许自定义头信息
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 响应一个数据
    const data = {
        name: 'atguigu'
    };
    // 对 对象 进行 字符串 转换
    let str = JSON.stringify(data)
    // 设置响应体 
    response.send(str);
});

//延时响应
app.all('/delay', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    setTimeout(() => {
        //设置响应体
        response.send('延时响应');
    }, 3000)
});

//jQuery 服务
app.all('/jquery-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // response.send('Hello jQuery AJAX');
    const data = { name: '尚硅谷' };
    response.send(JSON.stringify(data));
});

//jQuery 服务
app.all('/axios-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // response.send('Hello jQuery AJAX');
    const data = { name: '尚硅谷' };
    response.send(JSON.stringify(data));
});

//fetch 服务
app.all('/fetch-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // response.send('Hello jQuery AJAX');
    const data = { name: '尚硅谷' };
    response.send(JSON.stringify(data));
});


//用户名检测是否存在
app.all('/check-username',(request, response) => {
  const data = {
    exist: 1,
    msg: '用户名已经存在'
  };
  //将数据转化为字符串
  let str = JSON.stringify(data);
  //返回结果
  response.end(`handle(${str})`);
});

app.all('/jquery-jsonp-server',(request, response) => {
    // response.send('console.log("hello jsonp")');
    const data = {
        name:'尚硅谷',
        city: ['北京','上海','深圳']
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //接收 callback 参数
    let cb = request.query.callback;

    //返回结果
    response.end(`${cb}(${str})`);
});

app.all('/cors-server', (request, response)=>{
    //设置响应头 *表示所有网页都可以，限定就填限定的IP
    response.setHeader("Access-Control-Allow-Origin", "*");		// 允许哪些IP可以访问
    response.setHeader("Access-Control-Allow-Headers", '*');	// 允许哪些自定义请求头
    response.setHeader("Access-Control-Allow-Method", '*');		// 允许哪些请求方式
    // response.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    response.send('hello CORS');
});

// 4. 监听服务
app.listen(8000, () => {
    console.log("服务已经启动, 8000 端口监听中...");
})