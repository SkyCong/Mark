<template>
  <view id="wrap">
    <view class="search" @click="handleSearch">
      <view class="search_text">
        <image :src="searchIcon" alt="search" mode="widthFix" />
        搜索
      </view>
    </view>

    <swiper
      class="banner"
      indicator-color="#35393b"
      indicator-active-color="#fff"
      :circular="true"
      :indicator-dots="true"
      :autoplay="true"
    >
      <swiper-item v-for="item in bannerData" :key="item.id">
        <image :src="item.img_url" :alt="item.name" mode="widthFix" />
      </swiper-item>
    </swiper>

    <view class="nav">
      <view class="nav_list" @click="navigateToClass">
        <view class="nav_icon"></view>
        <text>分类查找</text>
      </view>
      <view class="nav_list" @click="navigateToDaycard">
        <view class="nav_icon">{{ currentDate }}</view>
        <text>每日电影卡片</text>
      </view>
      <view class="nav_list" @click="navigateToHotmovie">
        <view class="nav_icon"></view>
        <text>影院热映</text>
      </view>
    </view>

    <view class="findWrap">
      <view
        v-for="item in listData"
        :key="item.pubDate"
        class="findList"
        @click="navigateToDetails(item.object.id)"
      >
        <view class="hr"></view>
        <image
          :src="item.object.imgUrl.slice(0, -4)"
          :alt="item.object.id"
          mode="widthFix"
          :lazy-load="true"
        />
        <view class="name">{{ item.object.title }}</view>
        <view class="like">
          <image
            :src="likeIcon"
            alt="icon"
            mode="widthFix"
          />
          {{ '100' }}
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import Taro from '@tarojs/taro'
import http from '../../../utils/fetch'
import searchIcon from '@/assets/search_empty_icon.png'
import likeIcon from '@/assets/daily_card_like_unchecked.png'
import './discovery.scss'

export default defineComponent({
  name: 'Discovery',
  props: {
    page: {
      type: Number,
      default: 1
    },
    listData: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const bannerData = ref([])
    const currentDate = new Date().getDate()

    const fetchData = async () => {
      try {
        const result = await http({
          url: 'https://www.skycong.xyz/mark/v160/singles/banner',
          method: 'GET'
        })
        bannerData.value = result.data.data
      } catch (error) {
        console.error('Fetch banner error:', error)
      }
    }

    const handleSearch = () => {
      Taro.navigateTo({
        url: '/pages/display/search/search'
      })
    }

    const navigateToClass = () => {
      Taro.navigateTo({
        url: '/pages/display/class/class'
      })
    }

    const navigateToDaycard = () => {
      Taro.navigateTo({
        url: '/pages/display/daycard/daycard'
      })
    }

    const navigateToHotmovie = () => {
      Taro.navigateTo({
        url: '/pages/display/hotmovie/hotmovie'
      })
    }

    const navigateToDetails = (id) => {
      Taro.navigateTo({
        url: `/pages/display/index_detais/indexDetails?id=${id}`
      })
    }

    onMounted(() => {
      fetchData()
    })

    return {
      bannerData,
      currentDate,
      searchIcon,
      likeIcon,
      handleSearch,
      navigateToClass,
      navigateToDaycard,
      navigateToHotmovie,
      navigateToDetails
    }
  }
})
</script>

<style lang="scss">
@import './discovery.scss';
</style>
