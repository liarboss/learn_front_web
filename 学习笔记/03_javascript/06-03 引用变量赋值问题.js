let a = { age: 12 }

// 此时是将a指向的地址值赋值给B,所以B此时也指向{age:12}这个内存
let b = a

// 此时重新创建了一个内存并让a指向它，所以此处a指向的是{name:'hong'}，而b指向仍是{age:12}
a = { name: 'hong' }

// 此时a与b指向的内存已经不一样了,所以修改互不影响
b.age = 14
console.log(b.age, a.name, a.age) // 14 hong undefined

// 2个引用变量指向同一个对象, 让一个指向其他个对象, 另一依然指向前一个对象，a仍是{name: 'hong'}
const fn2 = (obj) => obj = { age: 15 }
// const fn2 = (fn) => fn.age = 15
fn2(a)
console.log(a.age) // undefined

