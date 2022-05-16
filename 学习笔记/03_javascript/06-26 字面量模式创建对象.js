var p = {
    name: 'Tom',
    age: 12,
    setName: function (name) {
      this.name = name
    }
  }
  
  console.log(p.name, p.age)
  p.setName('JACK')
  console.log(p.name, p.age)
  
  var p2 = {  // 如果创建多个对象代码很重复
    name: 'Bob',
    age: 13,
    setName: function (name) {
      this.name = name
    }
  }