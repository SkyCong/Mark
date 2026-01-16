<template>
  <view class="index-container">
    <discovery v-if="current === 0" :page="page" :list-data="listData" />
    <movie v-if="current === 1" />
    <setting v-if="current === 2" />
    <tab-bar
      :fixed="true"
      :font-size="11"
      :icon-size="22"
      selected-color="#000"
      color="#496069"
      :tab-list="tabList"
      @click="handleClick"
      :current="current"
    />
  </view>
</template>

<script>
import { defineComponent, ref, onMounted, onReachBottom } from 'vue'
import Taro from '@tarojs/taro'
import TabBar from '../../components/TabBar.vue'
import Discovery from './discovery/discovery.vue'
import Movie from './movie/movie.vue'
import Setting from './setting/setting.vue'
import http from '../../utils/fetch'
import './index.scss'

export default defineComponent({
  name: 'Index',
  components: {
    Discovery,
    Movie,
    Setting,
    TabBar
  },
  setup() {
    const current = ref(0)
    const page = ref(1)
    const listData = ref([])
    
    const tabList = [
      { 
        title: '发现',
        image: '../../assets/tab_discover_unchecked.png',
        selectedImage: '../../assets/tab_discover_checked.png'
      },
      { 
        title: '我的电影',
        image: '../../assets/tab_movies_unchecked.png',
        selectedImage: '../../assets/tab_movies_checked.png'
      },
      { 
        title: '账号',
        image: '../../assets/tab_usercenter_unchecked.png',
        selectedImage: '../../assets/tab_usercenter_checked.png'
      }
    ]

    const fetchData = async () => {
      try {
        const result = await http({
          url: 'https://www.moviebase.cn/uread/api/v3/channel/contents',
          data: {
            containerId: 12,
            pageContext: page.value,
            platform: 1,
            deviceId: 'AD3E5F1B-9B0C-4DC4-BDBC-59EF431C2D29',
            appVersion: '3.5.0'
          },
          method: 'GET'
        })
        
        listData.value = [
          ...listData.value,
          ...result.data.contentList
        ]
      } catch (error) {
        console.error('Fetch data error:', error)
      }
    }

    const handleClick = (index) => {
      current.value = index
      const titles = ['发现', '我的电影', '账号']
      Taro.setNavigationBarTitle({
        title: titles[index]
      })
    }

    onMounted(() => {
      if (process.env.TARO_ENV === 'weapp') {
        Taro.showShareMenu({
          withShareTicket: true
        })
      }
      fetchData()
    })

    onReachBottom(() => {
      if (current.value === 0) {
        page.value = page.value + 1
        fetchData()
      }
    })

    return {
      current,
      page,
      listData,
      tabList,
      handleClick
    }
  }
})
</script>

<style lang="scss">
@import './index.scss';
</style>
