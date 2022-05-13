// 匿名函数自调用
(function () {
    var a = 3
    console.log(a + 3)
})()
// console.log(a)	// a is not defined

// 此处要加一个分号
// 因为自调用函数外部有一个()包裹，可能与前方以()结尾的代码合在一起认为是函数调用
// console.log(a)(IIFE)
; (function () {	// 不会污染外部(全局)命名空间-->举例
    let a = 1;
    function test() {	//声明一个局部函数test
        console.log(++a)
        console.log("11111111111111111111")
    }
    window.$ = function () {	// 向外暴露一个全局函数 1. $是一个函数 2. $执行后返回的是一个对象
        return {
            test: test
        }
    }
})()
// test ()	// test is not defined
$().test()