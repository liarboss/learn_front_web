// 父类型
function Supper() {
    this.supProp = '父亲的原型链'
}
// 给父类型的原型上增加一个 showSupperProp 方法，打印自身 subProp
Supper.prototype.showSupperProp = function () {
    console.log(this.supProp)
}

// 子类型
function Sub() {
    this.subProp = '儿子的原型链'
}
// 子类型的原型为父类型的一个实例对象
Sub.prototype = new Supper()
// 让子类型的原型的constructor指向子类型
// 如果不加，其构造函数找的[`new Supper()`]时从顶层Object继承来的构造函数,指向[`Supper()`]
Sub.prototype.constructor = Sub
// 给子类型的原型上增加一个 showSubProp 方法，打印自身 subProp
Sub.prototype.showSubProp = function () {
    console.log(this.subProp)
}

var sub = new Sub()

sub.showSupperProp() // 父亲的原型链
sub.showSubProp() // 儿子的原型链
console.log(sub)
  /**
  Sub {subProp: "儿子的原型链"}
  subProp: "儿子的原型链"
  __proto__: Supper
  constructor: ƒ Sub()
  showSubProp: ƒ ()
  supProp: "父亲的原型链"
    __proto__: Object
*/