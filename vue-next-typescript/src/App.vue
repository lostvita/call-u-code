<template>
  <div class="app">
    <h3 class="title">Film Site@Call U Code</h3>
    <search-bar v-model="search"></search-bar>
    <order-by v-model="orderby"></order-by>
    <film-list :films="films"></film-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FilmList from './components/film-list.vue';
import OrderBy from './components/order-by.vue';
import SearchBar from './components/search-bar.vue';
import useFilm from './composables/useFilm'

export default defineComponent({
  name: 'App',
  components: {FilmList, OrderBy, SearchBar},
  setup() {
    const { search, orderby, films } = useFilm()
    
    return { films, search, orderby }
  }
});
</script>

<style lang="less" scoped>
.app {
  width: 100%;
}
.title {
  padding: 20px 0;
  margin: 20px auto;
  text-align: center;
  color: peru;
}
</style>
