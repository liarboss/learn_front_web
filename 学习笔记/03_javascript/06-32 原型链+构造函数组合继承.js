function Person(name, age) {
    this.name = name
    this.age = age
  }
  Person.prototype.setName = function (name) {
    this.name = name
  }
  
  function Student(name, age, price) {
    Person.call(this, name, age)  // 为了得到属性
    this.price = price
  }
  Student.prototype = new Person() // 为了能看到父类型的方法
  Student.prototype.constructor = Student // 修正constructor属性
  Student.prototype.setPrice = function (price) {
    this.price = price
  }
  
  var s = new Student('Tom', 24, 15000)
  s.setName('Bob')
  s.setPrice(16000)
  console.log(s.name, s.age, s.price)