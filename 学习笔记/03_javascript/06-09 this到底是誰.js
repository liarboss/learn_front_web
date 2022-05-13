function Person(color) {
    console.log(this)
    this.color = color;
    this.getColor = function () {
      console.log(this)
      return this.color;
    };
    this.setColor = function (color) {
      console.log(this)
      this.color = color;
    };
  }
  
  const obj = {};
  Person("red"); // this是谁? window
  
  const p = new Person("yello"); // this是谁? p
  p.getColor(); //this是谁? p
  
  // 调用call会改变this指向-->让我的p函数成为`obj`的临时方法进行调用
  p.setColor.call(obj, "black"); // this是谁? obj
  
  const test = p.setColor;
  test(); // this是谁? window  -->因为直接调用了
  
  function fun1() {
    function fun2() {  
      console.log(this);
    }
    fun2();	// this是谁? window
  }
  fun1();	// 调用fun1