// 如果B函数的显示原型对象在A函数的原型链上，则instanceof为true，否则为false
// 案例1
function Foo() { }
var f1 = new Foo()
console.log(f1 instanceof Foo)		// true
console.log(f1 instanceof Object) // true

// 案例2
console.log(Object instanceof Function)		// true
console.log(Object instanceof Object)			// true
console.log(Function instanceof Function) // true
console.log(Function instanceof Object)		// true
function Foo() { }
console.log(Object instanceof Foo) // false
console.log(Foo instanceof Object)