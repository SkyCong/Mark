<template>
  <view class="details_wrap">
    <swiper
      class="banner"
      :duration="300"
      :circular="true"
      :autoplay="true"
    >
      <swiper-item v-for="(photo, index) in detailsData.photos" :key="index">
        <image :src="photo" alt="banner" mode="widthFix" />
      </swiper-item>
    </swiper>

    <view class="wat">
      <view class="like">想看</view>
    </view>

    <view class="main">
      <view class="main">
        <view class="header">概览</view>
        <view class="movie_content">
          <view class="list">
            <view class="left">上映</view>
            <view class="right">{{ detailsData.pubdate }}</view>
          </view>

          <view class="list">
            <view class="left">片长</view>
            <view class="right">{{ detailsData.duration }}</view>
          </view>

          <view class="list">
            <view class="left">类型</view>
            <view class="right">{{ detailsData.genres }}</view>
          </view>

          <view class="list">
            <view class="left">导演</view>
            <view class="right">{{ detailsData.directors }}</view>
          </view>

          <view class="list">
            <view class="left">编剧</view>
            <view class="right">{{ detailsData.writers }}</view>
          </view>

          <view class="list">
            <view class="left">主演</view>
            <view class="right">{{ detailsData.casts }}</view>
          </view>

          <view class="list last">{{ detailsData.summary }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import Taro from '@tarojs/taro'
import http from '../../../utils/fetch'
import './details.scss'

export default defineComponent({
  name: 'Details',
  setup() {
    const detailsData = ref({
      photos: []
    })

    const fetchData = async () => {
      try {
        const id = Taro.getCurrentInstance().router.params.id
        const result = await http({
          url: `https://www.skycong.xyz/mark/v160/Mobile/movies/${id}`,
          method: 'GET'
        })
        detailsData.value = result.data.data
        Taro.setNavigationBarTitle({
          title: result.data.data.name
        })
      } catch (error) {
        console.error('Fetch details error:', error)
      }
    }

    onMounted(() => {
      fetchData()
    })

    return {
      detailsData
    }
  }
})
</script>

<style lang="scss">
@import './details.scss';
</style>
