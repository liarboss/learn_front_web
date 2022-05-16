
// 案例4
f1();
console.log(c); // 9
console.log(b); // 9
// console.log(a); // 报错
function f1() {
    var a = b = c = 9;
    console.log(a); // 9
    console.log(b); // 9
    console.log(c); // 9
}
    // // 以下代码
    // function f1() {
    //     var a;
    //     a = b = c = 9;
    //     // 相当于 var  a  = 9; b = 9; c = 9; b 和 c 直接赋值 没有var 声明 当 全局变量看
    //     // 集体声明  var a = 9, b = 9, c = 9;
    //     console.log(a);
    //     console.log(b);
    //     console.log(c);
    // }
    // f1();
    // console.log(c);
    // console.log(b);
    // console.log(a);
