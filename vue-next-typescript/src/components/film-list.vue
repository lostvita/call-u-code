<template>
  <div class="film-list">
    <div v-if="!films.length" class="film-empty">空空如也😥</div>
    <template v-else>
      <transition-group name="list">
        <div class="film-item" v-for="film in films" :key="film.id">
          <img :src="film.picture" alt="" class="film-pic">
          <div class="film-info">
            <h3 class="film-title">{{ film.title }}</h3>
            <div class="film-category">{{ film.category }} / {{ film.region }}</div>
            <div class="film-description">{{ film.description }}</div>
          </div>
        </div>
      </transition-group>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { FilmItem } from '../types/item'

export default defineComponent({
  name: 'FlimList',
  props: {
    films: {
      type: Array as PropType<FilmItem[]>,
      required: true
    }
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
.list-move {
  transition: all .4s;
}
</style>
