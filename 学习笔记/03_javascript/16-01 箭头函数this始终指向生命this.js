// 箭头函数this始终指向声明时作用域下this的值，call等方法无法改变其指向

let obj = {
    uname: 'rick',
    age: 30
  };
  let foo = () => { console.log(this) }
  let bar = function () { console.log(this) }
  
  // call 对箭头函数无效
  foo.call(obj); // window
  bar.call(obj); // obj {...}