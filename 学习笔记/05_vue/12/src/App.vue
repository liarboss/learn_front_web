<template>
  <div>
    <img src="./assets/logo.png" alt="">
    <School></School>
    <Student name="大魚" sex="女"></Student>
    <h1>=========================================</h1>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
    <!-- <School ref="sch" /> -->
    <h1>=========================================</h1>  
    <Student name="李四" sex="女" :age="18"/>
    <Student name="王五" sex="男" :age="18"/>
    <h1>=========================================</h1>  

    <h1 class="title">你好啊 scoped</h1>
  </div>
</template>

<script>
// 引入组件
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: { School, Student },
  data() {
    return {
      msg: '欢迎学习Vue！'
    }
  },
  methods: {
    showDOM() {
      console.log(this.$refs.title)	// 真实DOM元素
      console.log(this.$refs.btn)		// 真实DOM元素
      console.log(this.$refs.sch)		// School组件的实例对象（vc）
    }
  },
}
</script>

<style scoped>
  .title {
    color: red;
  }
</style>