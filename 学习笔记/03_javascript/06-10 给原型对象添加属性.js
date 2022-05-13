// 每个函数都有一个 prototype 属性, 它默认指向一个 Object 空对象(即称为: 原型对象)
console.log(Date.prototype, typeof Date.prototype)

function Fun() {
}
console.log(Fun.prototype)  // 默认指向一个 Object 空对象(没有自己的属性)

// 原型对象中有一个属性constructor, 它指向函数对象
console.log(Date.prototype.constructor === Date)
console.log(Fun.prototype.constructor === Fun)

// 给原型对象添加属性、方法(一般是方法) ===> 实例对象可以访问
Fun.prototype.test = function () {
    console.log('test()')
}

var fun = new Fun()
fun.test()