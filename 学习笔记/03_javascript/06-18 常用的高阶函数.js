// map接受一个函数作为参数，不改变原来的数组，返回一个全新的数组
var arr = [1, 2, 3, 4, 5]
var arr1 = arr.map(item => item = 2)
//arr  输出[1,2,3,4,5]
//arr1 输出[2,2,2,2,2]

// reduce接受一个函数作为参数，这个函数要有两个形参，代表数组中的前两项，
// reduce会将这个函数的结果与数组中的第三项再次组成这个函数的两个形参以此类推进行累积操作
var arr = [1, 2, 3, 4, 5]
var arr2 = arr.reduce((a, b) => a + b)
console.log(arr2) // 15

// filter返回过滤后的数组。filter也接收一个函数作为参数，这个函数将作用于数组中的每个元素，
// 根据该函数每次执行后返回的布尔值来保留结果，如果是true就保留，如果是false就过滤掉
var arr = [1, 2, 3, 4, 5]
var arr3 = arr.filter(item => item % 2 == 0)
console.log(arr3)	// [2,4]
