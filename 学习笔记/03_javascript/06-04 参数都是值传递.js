// 传进来的obj存储的是a中存的地址值,所以obj==a(因为他们地址值一致,指向一致)
// 2个引用变量指向同一个对象, 通过一个变量修改对象内部数据, 
// 另一个变量看到的是修改之后的数据，所以被进行了修改
let a = { name: 'hong' }
const fn2 = (obj) => obj.age = 15
fn2(a)
console.log(a.age) //15 