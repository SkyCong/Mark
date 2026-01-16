<template>
  <view class="hot_wrap">
    <tab-bar
      class="check"
      selected-color="#000"
      color="#496069"
      :tab-list="tabList"
      @click="handleClick"
      :current="current"
    />
    <hot-main-ui :data="current === 0 ? ingData : afterData" />
  </view>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import TabBar from '../../../components/TabBar.vue'
import HotMainUI from './hotmainUI/HotMainUI.vue'
import http from '../../../utils/fetch'
import './hotmovie.scss'

export default defineComponent({
  name: 'HotMovie',
  components: {
    TabBar,
    HotMainUI
  },
  setup() {
    const current = ref(0)
    const ingData = ref([])
    const afterData = ref([])
    const tabList = [
      { title: '热映' },
      { title: '待映' }
    ]

    const fetchData = async () => {
      try {
        const resultIng = await http({
          url: 'https://www.skycong.xyz/mark/v160/movies/intheaters',
          method: 'GET'
        })
        const resultAfter = await http({
          url: 'https://www.skycong.xyz/db/v2/movie/coming_soon',
          data: {
            start: 0
          },
          header: {
            'Content-Type': 'json'
          },
          method: 'GET'
        })

        ingData.value = resultIng.data.subjects
        afterData.value = resultAfter.data.subjects
      } catch (error) {
        console.error('Fetch hot movie data error:', error)
      }
    }

    const handleClick = (value) => {
      current.value = value
    }

    onMounted(() => {
      fetchData()
    })

    return {
      current,
      ingData,
      afterData,
      tabList,
      handleClick
    }
  }
})
</script>

<style lang="scss">
@import './hotmovie.scss';
</style>
