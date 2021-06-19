<template>
  <div class="order">
      <span>排列：</span>
      <div>
        <button :class="{ active: current === 'title' }" @click="orderHandle('title')">片名</button>
        <button :class="{ active: current === 'category' }" @click="orderHandle('category')">类别</button>
        <button :class="{ active: current === 'region' }" @click="orderHandle('region')">地区</button>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { OrderTerm } from '../types/term'

export default defineComponent({
  name: 'OrderBy',
  props: {
    modelValue: {
      type: String as PropType<OrderTerm>,
      default: 'title'
    }
  },
  setup(props, { emit }) {
    const current = ref<OrderTerm>('title')
    const orderHandle = (val: OrderTerm) => {
      current.value = val
      emit('update:modelValue', val)
    }
    return { orderHandle, current }
  },
})
</script>

<style lang="less" scoped>
.order {
  display: flex;
  align-items: center;
  max-width: 960px;
  margin: 20px auto 20px;
  & > span {
    color: #263859;
  }
  & button {
    --lightness: 92%;
    margin: 0 10px;
    color: #1195c9;
    border: 3px solid #1195c9;
    background: hsl(201, 100%, var(--lightness));
    padding: 5px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;

    &.active, &:hover {
      --lightness: 82%;
    }
  }
}
</style>
