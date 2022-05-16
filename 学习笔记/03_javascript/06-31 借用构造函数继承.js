function Person(name, age) {
    this.name = name
    this.age = age
}
function Student(name, age, price) {
    // 此处利用call(),将 [Student]的this传递给Person构造函数
    Person.call(this, name, age)  // 相当于: this.Person(name, age)
    /*this.name = name
   this.age = age*/
    this.price = price
}

var s = new Student('Tom', 20, 14000)
console.log(s.name, s.age, s.price)