<template>
  <div class="film-list">
    <div v-if="!filmList.length" class="film-empty">空空如也😥</div>
    <div v-else class="film-item" v-for="film in filmList" :key="film.id">
      <img :src="film.picture" alt="" class="film-pic">
      <div class="film-info">
        <h3 class="film-title">{{ film.title }}</h3>
        <div class="film-category">{{ film.category }} / {{ film.region }}</div>
        <div class="film-description">{{ film.description }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { FilmItem } from '../types/item'
import { OrderTerm } from '../types/term'

export default defineComponent({
  name: 'FlimList',
  props: {
    films: {
      type: Array as PropType<FilmItem[]>,
      required: true
    },
    order: {
      type: String as PropType<OrderTerm>,
      default: 'title'
    },
    search: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const filmList = computed(() => {
      const nameRegx = props.search ? new RegExp(props.search, 'i') : false
      return props.films.filter(v => !nameRegx || nameRegx.test(v.title)).sort((a, b) => {
        const order = props.order
        return a[order] > b[order] ? 1 : a[order] === b[order] ? 0 : -1
      })
    })

    return { filmList }
  }
})
</script>

<style lang="less" scoped>
.film {
  &-list {
    max-width: 960px;
    margin: 20px auto;
  }

  &-item {
    display: flex;
    background: white;
    padding: 16px;
    margin: 16px 0;
    border-radius: 4px;
  }

  &-pic {
    width: 200px;
    margin-right: 10px;
  }

  &-title {
    margin: 0 0 10px;
    text-transform: capitalize;
    color: peru;
  }

  &-category {
    color: #D8B384;
    font-weight: bold;
    margin: 10px 0 20px;
  }

  &-description {
    line-height: 26px;
    color: #263859;
  }

  &-empty {
    padding: 50px 0;
    text-align: center;
    color: #666;
    font-size: 18px;
  }
}
</style>
