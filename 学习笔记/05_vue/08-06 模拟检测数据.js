let data = {
    name: '尚硅谷',
    address: '北京',
}

function Observer(obj) {
    // 汇总对象中所有的属性形成一个数组
    const keys = Object.keys(obj)
    // 遍历
    keys.forEach((k) => {
        Object.defineProperty(this, k, {
            get() {
                return obj[k]
            },
            set(val) {
                console.log(`${k}被改了，我要去解析模板，生成虚拟DOM.....我要开始忙了`)
                obj[k] = val
            }
        })
    })
}

// 创建一个监视的实例对象，用于监视data中属性的变化
const obs = new Observer(data)
console.log(obs)

// 准备一个vm实例对象
let vm = {}
vm._data = data = obs