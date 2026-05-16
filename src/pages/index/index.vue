<template>
  <view class="index-container">
    <discovery v-if="current === 0" :page="page" :list-data="listData" />
    <movie v-if="current === 1" />
    <setting v-if="current === 2" />
    <tab-bar
      :fixed="true"
      :font-size="12"
      :icon-size="24"
      selected-color="#000"
      color="#496069"
      :tab-list="tabList"
      @tap="handleClick"
      :current="current"
    />
  </view>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import Taro, { useReachBottom } from '@tarojs/taro'
import TabBar from '../../components/TabBar.vue'
import Discovery from '../../components/HomeDiscovery.vue'
import Movie from '../../components/HomeMovie.vue'
import Setting from '../../components/HomeSetting.vue'
import http from '../../utils/fetch'
import tabDiscoverUnchecked from '../../assets/tab_discover_unchecked.png'
import tabDiscoverChecked from '../../assets/tab_discover_checked.png'
import tabMoviesUnchecked from '../../assets/tab_movies_unchecked.png'
import tabMoviesChecked from '../../assets/tab_movies_checked.png'
import tabUsercenterUnchecked from '../../assets/tab_usercenter_unchecked.png'
import tabUsercenterChecked from '../../assets/tab_usercenter_checked.png'
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
        image: tabDiscoverUnchecked,
        selectedImage: tabDiscoverChecked
      },
      { 
        title: '我的电影',
        image: tabMoviesUnchecked,
        selectedImage: tabMoviesChecked
      },
      { 
        title: '账号',
        image: tabUsercenterUnchecked,
        selectedImage: tabUsercenterChecked
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
        }).catch(() => {
          console.log('showShareMenu is unavailable in current environment')
        })
      }
      fetchData()
    })

    useReachBottom(() => {
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
