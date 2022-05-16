function fn1() {
    // 此时闭包就已经产生了(函数提升,实际上[fn2]提升到了第一行, 内部函数对象已经创建了)
    var a = 2
    function fn2 () { //如果时[let fn2=function(){}]，那么在这行才会产生闭包
      a++
      console.log(a)
    }
    return fn2
  }
  var f = fn1()
  f() // 3
  f() // 4
  f = null // 闭包死亡(包含闭包的函数对象成为垃圾对象)