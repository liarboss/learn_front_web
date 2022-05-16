// 一个人: name:"Tom", age: 12
var p = new Object()
p = {}
p.name = 'Tom'
p.age = 12
p.setName = function (name) {
  this.name = name
}

console.log(p.name, p.age)
p.setName('Bob')
console.log(p.name, p.age)