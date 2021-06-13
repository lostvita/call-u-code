<template>
  <div class="app">
    <h3 class="title">{{ title }}</h3>
    <p class="author">author: {{ author }} / age: {{ age }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    // const state = reactive({
    //   title: 'Film Site' as string,
    //   author: 'wilton' as string,
    //   age: 18 as number | string
    // })
    // setTimeout(() => {
    //   state.age = 20
    //   console.log(state)
    // }, 1000);
    // return { ...toRefs(state) }

    const title = ref<string>('Film Site')
    const author = ref('wilton')
    const age = ref<number | string>(18)

    setTimeout(() => {
      age.value = '20'
    }, 1000);
    return { title, author, age }
  }
});
</script>

<style lang="less" scoped>
.app {
  color: tomato;
}
</style>
