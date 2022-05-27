// 该文件是整个项目的入口文件

import Vue from 'vue'				// 引入Vue
import App from './App.vue'	// 引入App组件，它是所有组件的父组件
// import {mixin} from './mixin'
import plugins from './plugins'	// 引入插件

Vue.config.productionTip = false
// Vue.mixin(hunhe)		// 全局混合引入
// Vue.mixin(hunhe2)	// 全局混合

Vue.use(plugins,1,2,3)	// 应用（使用）插件

new Vue({
	el:'#app',
  render: h => h(App),			// render函数完成了这个功能：将App组件放入容器中
})// .$mount('#app')