//定义构造函数
function Fn() {
    // 内部默认执行语句: this.prototype = {}
}
// 1. 每个函数function都有一个prototype，即显式原型属性, 默认指向一个空的Object对象
console.log(Fn.prototype)


// 创建实例对象
var fn = new Fn()  // 内部默认执行语句: this.__proto__ = Fn.prototype
// 2. 每个实例对象都有一个__proto__，可称为隐式原型
console.log(fn.__proto__)

// 3. 对象的隐式原型的值为其对应构造函数的显式原型的值
console.log(Fn.prototype === fn.__proto__) // true

// 给原型添加方法
Fn.prototype.test = function () {
    console.log('test()')
}

// 通过实例调用原型的方法
fn.test()