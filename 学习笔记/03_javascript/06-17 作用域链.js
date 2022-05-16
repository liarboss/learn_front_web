var a = 1
 function fn1() {
   var b = 2
   function fn2() {
     var c = 3
     console.log(c)
     console.log(b)
     console.log(a)
     console.log(d)
   }
   fn2()
 }
 fn1()