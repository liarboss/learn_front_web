//返回一个对象的函数===>工厂函数
function createPerson(name, age) { 
    var obj = {
      name: name,
      age: age,
      setName: function (name) {
        this.name = name
      }
    }
    return obj
  }
  
  // 创建2个人
  var p1 = createPerson('Tom', 12)
  var p2 = createPerson('Bob', 13)
  
  // p1/p2是Object类型
  
  function createStudent(name, price) {
    var obj = {
      name: name,
      price: price
    }
    return obj
  }
  var s = createStudent('张三', 12000)
  // s也是Object