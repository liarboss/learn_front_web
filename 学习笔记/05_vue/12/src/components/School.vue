<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我提示学校名</button>
    <button @click="test">点我测试一个hello方法</button>
  </div>
</template>

<script>
//引入一个hunhe
import { hunhe, hunhe2 } from '../mixin'

export default {
  name: "School",
  data() {
    return {
      name: "UESTC",
      address: "成都",
    };
  },
  methods: {
    showName() { alert(this.name); },
    test() {
      // 這個是插件裡的方法
      this.hello()
    }
  },
  mixins: [hunhe, hunhe2]	// 局部混入
};
</script>

<style scoped>
.demo {
  background-color: orange;
}
</style>