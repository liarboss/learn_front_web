// 遍历数组
const xiyou = ['唐僧', '孙悟空', '猪八戒', '沙僧'];

//使用 for...of 遍历数组
for (let v of xiyou) {
    console.log(v);
}

let iterator = xiyou[Symbol.iterator]();

//调用对象的next方法
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


// 遍历 Map
const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
let iter = map[Symbol.iterator]();
// next() 方法每执行一次，指针自增
console.log(iter.next());	// { value: [ 'a', 1 ], done: false }
console.log(iter.next()); // { value: [ 'b', 2 ], done: false }
console.log(iter.next()); // { value: [ 'c', 3 ], done: false }
console.log(iter.next()); // { value: undefined, done: true }
////////////////////////////////////////////////////////////////////////////////////////


const map2 = new Map();
map2.set('a', 1);
map2.set('b', 2);
map2.set('c', 3);

for (let [k, v] of map2) {
    console.log(k, v);
}

// 结果
// a 1
// b 2
// c 3