<template>
  <div class="search-wrapper">
    <div class="search-group"><input type="text" name="" placeholder="搜索片名" v-model="keyword"></div>
    <div class="seatch-controls"><button class="search-btn" @click="searchHandle">搜索</button></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'SearchBar',
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const keyword = ref('')
    const searchHandle = () => {
      if (!keyword.value) return
      emit('update:modelValue', keyword.value)
    }
    return { keyword, searchHandle }
  },
})
</script>

<style lang="less" scoped>
.search-wrapper {
  max-width: 960px;
  height: auto;;
  margin: 20px auto;
  display: flex;
}
.search-group {
  flex-grow: 1;
  padding: 0 10px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #ccc;
  & > input {
    width: 100%;
    height: 100%;
    padding: 0;
    border: none;
    outline: none;
    background: transparent;
  }
}
.search-controls {
  width: 120px;
}
.search-btn {
  --lightness: 92%;
  margin: 0 10px;
  color: #1195c9;
  border: 3px solid #1195c9;
  background: hsl(201, 100%, var(--lightness));
  padding: 5px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    --lightness: 82%;
  }
}
</style>
