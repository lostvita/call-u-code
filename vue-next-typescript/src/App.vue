<template>
  <div class="app">
    <h3 class="title">{{ title }}</h3>
    <p class="author">{{ author }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const data = reactive({
      title: 'Film Site',
      author: 'wilton'
    })
    return { ...toRefs(data) }
  }
});
</script>

<style lang="less" scoped>
.app {
  color: tomato;
}
</style>
