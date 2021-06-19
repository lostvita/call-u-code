import { FilmItem, ObjectOf } from '@/types/item'
import { OrderTerm } from '@/types/term'
import { computed, ComputedRef, Ref, ref } from 'vue'
export default function useFilm(): ObjectOf<Ref | ComputedRef> {
  const data: FilmItem[] = [
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
      category: '历史',
      region: '德国',
      description: '根据畅销书“ DerÜberläufer”改编，讲述了一个二战德国国防军士兵的故事，他经历了第二次世界大战的疯狂，并逃往红军。'
    },
    {
      id: 3,
      title: '隐秘的角落',
      picture: 'https://static-movie.a.88cdn.com/8ea6203f7053766720b5ce3089285c93.jpg?imageView2/1/w/400/h/560/q/90/interlace/1/format/webp',
      category: '悬疑',
      region: '中国',
      description: '该剧改编自紫金陈推理小说《坏小孩》 ，讲述了沿海小城的三个孩子在景区游玩时无意拍摄记录了一次谋杀，他们的冒险也由此展开。扑朔迷离的案情，将几个家庭裹挟其中，带向不可预知的未来'
    },
    {
      id: 4,
      title: '前哨',
      picture: 'https://static-movie.a.88cdn.com/e638172bc2ce668ad6fb45db8fe61d11.jpg?imageView2/1/w/400/h/560/q/90/interlace/1/format/webp',
      category: '战争',
      region: '美国',
      description: '斯科特·伊斯特伍德、卡赖伯·兰德里·琼斯、奥兰多·布鲁姆将主演Millennium Media打造的阿富汗战争题材影片[前哨](The Outpost，暂译)。罗德·拉里执导影片，影片则根据CNN记者Jake Tapper著作改编。影片故事将围绕53名美国士兵的真实故事展开，这些士兵与阿富汗东北部约400名敌方武装分子拉开持久的作战。他们所建造的前哨基地位于巴基斯坦边境仅14英里处的三处陡峭山脉底部。'
    }
  ]
  const search = ref('')
  const orderby = ref<OrderTerm>('title')
  const films = computed(() => {
    const nameRegx = search.value ? new RegExp(search.value, 'i') : false
    return data.filter(v => !nameRegx || nameRegx.test(v.title)).sort((a, b) => {
      const order = orderby.value
      return a[order] > b[order] ? 1 : a[order] === b[order] ? 0 : -1
    })
  })
  return {
    search,
    orderby,
    films
  }
}