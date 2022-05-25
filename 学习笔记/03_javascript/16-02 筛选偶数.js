const arr = [1, 6, 9, 10, 100, 25]
// const result = arr.filter(function(item) {
//     if(item % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// });

const result = arr.filter(item => item % 2 === 0);

console.log(result);

