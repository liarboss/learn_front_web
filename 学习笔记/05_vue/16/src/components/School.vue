<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我提示学校名</button>
    <button @click="test">点我测试一个hello方法</button>
  </div>
</template>

<script>

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
      alert(this.address); 
      // this.hello()
    }
  }
};
</script>

<style scoped>
.demo {
  background-color: orange;
}
</style>