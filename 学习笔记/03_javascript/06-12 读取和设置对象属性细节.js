function Fn() { }
Fn.prototype.a = 'xxx'

var fn1 = new Fn()
var fn2 = new Fn()
fn2.a = 'yyy'
console.log(fn1.a, fn2.a, fn2) //xxx yyy  Fn{a: "yyy"}

function Person(name, age) {
    this.name = name
    this.age = age
}
Person.prototype.setName = function (name) {
    this.name = name
}

var p1 = new Person('Tom', 12)
p1.setName('Bob')
console.log(p1)  //Person {name: "Bob", age: 12}

var p2 = new Person('Jack', 12)
p2.setName('Cat')
console.log(p2) //Person {name: "Cat", age: 12}
console.log(p1.__proto__ === p2.__proto__) // true   -->所以方法一般定义在原型中