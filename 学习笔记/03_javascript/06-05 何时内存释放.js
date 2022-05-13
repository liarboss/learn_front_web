var a = 3
var obj = { name: "hong" }
obj = undefined || null  //此时,obj没有被释放,但是之前声明的`{name:"hong"}`由于没有人指向它,会在后面你某个时刻被垃圾回收器回收
function fn() { var b = {} }
fn() // b是自动释放, b所指向的对象是在后面的某个时刻由垃圾回收器回收
