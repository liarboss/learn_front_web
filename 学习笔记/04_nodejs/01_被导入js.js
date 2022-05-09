// 在一个自定义模块中，默认情况下， module.exports = {}

const age = 20

// 向 module.exports 对象上挂载 username 属性
username = 'zs'
// 向 module.exports 对象上挂载 sayHello 方法

sayHello = function () {
    console.log('Hello!')
}

// 让 module.exports 指向一个全新的对象
module.exports = {
    nickname: '小黑',
    age, 
    sayHi() {
        console.log('Hi!')
    },
    sayHello
}