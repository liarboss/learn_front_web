var b1 = {
    b2: [1, 'abc', console.log],
    //可以简化成 b3:()=>()=> 'hongjilin'  -->高阶函数相关知识
    b3: function () {
        return () => { return 'hongjilin' }
    }
}
/**使用instanceof进行对象判断*/
console.log(b1 instanceof Object, b1 instanceof Array) // true  false
console.log(b1.b2 instanceof Array, b1.b2 instanceof Object) // true true
console.log(b1.b3 instanceof Function, b1.b3 instanceof Object) // true true
/**使用typeof进行对象中某属性的判断*/
console.log(typeof b1.b2, typeof null) // 'object' 'object'
console.log(typeof b1.b3 == 'function') // true
console.log(typeof b1.b2[2] == 'function') //true
/**调用对象与数组中某函数示例*/
b1.b2[2]('调用console.log打印hongjilin')    //调用console.log打印hongjilin
console.log(b1.b3()()) // hongjilin