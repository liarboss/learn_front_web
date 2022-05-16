// 测试题1:  先执行变量提升, 再执行函数提升
function a() {}
var a
console.log(typeof a) // 'function'

// 测试题2:
if (!(b in window)) {
  var b = 1
}
console.log(b) // undefined

// 测试题3:
var c = 1
function c(c) {
  console.log(c)
  var c = 3 //与此行无关
}
c(2) // 报错  c is not a function