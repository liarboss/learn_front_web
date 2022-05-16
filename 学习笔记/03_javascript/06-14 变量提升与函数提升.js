var a = 1
function fn () {
  console.log(a)
  var a = 2	// 变量提升
}
fn()  // undefined
'--------------------------------------------'
console.log(b) //undefined  变量提升
fn2()	// 可调用，函数提升
// fn3()不能变量提升,函数表达式不提升
var b = 3
function fn2() {  console.log('fn2()') }
var fn3 = function () { console.log('fn3()') }