// dom事件回调函数
document.getElementById('btn').onclick = function () {
    alert(this.innerHTML)
}

// 定时器回调函数
setTimeout(function () {
    alert('到点了' + this)
}, 2000)