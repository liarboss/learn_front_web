// 这是一个 game 对象，假设我们不知道里面有什么属性和方法
const game = {
  uname: '俄罗斯方块',
  up: function () { },
  down: function () { }
}

// 通过 Symbol 生成唯一的属性名，然后给 game 添加方法
let [up, down] = [Symbol('up'), Symbol('down')];
game[up] = function () {
  console.log('up');
}
game[down] = function () {
  console.log('down');
}

// 调用刚刚创建的方法
game[up]();
game[down]();


let youxi = {
  name: "狼人杀",
  [Symbol('say')]: function () {
    console.log("我可以发言")
  },
  [Symbol('zibao')]: function () {
    console.log('我可以自爆');
  }
}

console.log(youxi)