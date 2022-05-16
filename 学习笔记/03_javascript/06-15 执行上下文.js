//1. 进入全局执行上下文
var a = 10
var bar = function (x) {
  var b = 5
  foo(x + b)   //3. 进入foo执行上下文
}
var foo = function (y) {
  var c = 5
  console.log(a + c + y)
}
bar(10) //2. 进入bar函数执行上下文