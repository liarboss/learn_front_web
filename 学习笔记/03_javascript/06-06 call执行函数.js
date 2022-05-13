var obj = {}
//此处不能使用箭头函数,因为箭头函数会改变this指向
function test2() {
    this.xxx = 'hongjilin'
}

// obj.test2()  不能直接, 根本就没有
test2.call(obj)  // 可以让一个函数成为指定任意对象的方法进行调用
console.log(obj.xxx)