// typeof返回数据类型的字符串表达
var a

//注意:typeof返回的是字符串
console.log(a, typeof a, typeof a == 'undefined', a == 'undefined') //undefined undefined true false
a = 4
console.log(typeof a == undefined)  // false
console.log(undefined == 'number') //false
a = 'hongjilin'
console.log(typeof a == 'string') //true
console.log(typeof a == 'String') //false  -->注意,返回的类型为小写
a = true
console.log(typeof a === 'boolean') //true
a = null
console.log(typeof a, a === null) // 'object'  true
let b = {}
console.log(typeof b, typeof null, '-------') // 'object' 'object'  -->所以Typeof不能判断null与object