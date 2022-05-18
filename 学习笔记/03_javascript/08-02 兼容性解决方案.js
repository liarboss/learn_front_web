function addEventListener(element, eventName, fn) {
  // 判断当前浏览器是否支持 addEventListener 方法
  if (element.addEventListener) {
    element.addEventListener(eventName, fn);  // 第三个参数 默认是false
  } else if (element.attachEvent) {
    element.attachEvent('on' + eventName, fn);
  } else {
    element['on' + eventName] = fn;	// 相当于 element.onclick = fn;
  } 
}