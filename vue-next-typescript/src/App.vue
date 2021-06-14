<template>
  <div class="app">
    <h3 class="title">{{ title }}</h3>
    <film-list :films="filmList"></film-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import FilmList from './components/film-list.vue';
import { FilmItem } from './types/item'

export default defineComponent({
  name: 'App',
  components: {FilmList},
  setup() {
    const title = ref<string>('Film Site@Call U Code')
    const filmList = ref<FilmItem[]>([
      {
        id: 1,
        title: '华尔街之狼',
        picture: 'https://static-movie.a.88cdn.com/97ea4a7a089193b6724da899c3bf356d.jpg?imageView2/1/w/400/h/560/q/90/interlace/1/format/webp',
        category: '剧情',
        region: '美国',
        description: '在危机四伏的投资界，掌管史崔顿·奥克蒙公司的乔丹·贝尔福特（莱昂纳多·迪卡普里奥 Leonardo DiCaprio 饰）生活侈靡、实力雄厚。1987年，22岁的乔丹进入罗斯柴尔德公司，从接线员做起，在高级经纪人马克（马修·麦康纳 Matthew McConaughey 饰）指点下，进入了股票经纪人充满毒品和欲望的世界，半年后因“黑色星期一”，乔丹转投靠贩卖“便士股票”的小公司，凭借巧舌如簧获得成功，与邻居唐尼（乔纳·希尔 Jonah Hill 饰）和一班朋友另立门户，游走在灰色地带获利颇丰，获称“华尔街之狼”。'
      },
      {
        id: 2,
        title: '投敌者',
        picture: 'https://static-movie.a.88cdn.com/d1d8c14f4fb0f6e402f9a60e85fea98c.jpg?imageView2/1/w/400/h/560/q/90/interlace/1/format/webp',
        category: '剧情',
        region: '美国',
        description: '在危机四伏的投资界，掌管史崔顿·奥克蒙公司的乔丹·贝尔福特（莱昂纳多·迪卡普里奥 Leonardo DiCaprio 饰）生活侈靡、实力雄厚。1987年，22岁的乔丹进入罗斯柴尔德公司，从接线员做起，在高级经纪人马克（马修·麦康纳 Matthew McConaughey 饰）指点下，进入了股票经纪人充满毒品和欲望的世界，半年后因“黑色星期一”，乔丹转投靠贩卖“便士股票”的小公司，凭借巧舌如簧获得成功，与邻居唐尼（乔纳·希尔 Jonah Hill 饰）和一班朋友另立门户，游走在灰色地带获利颇丰，获称“华尔街之狼”。'
      }
    ])
    return { title, filmList }
  }
});
</script>

<style lang="less" scoped>
.app {
  width: 100%;
}
.title {
  text-align: center;
  color: peru;
}
</style>
