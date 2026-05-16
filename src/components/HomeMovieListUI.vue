<template>
  <view class="movie_list_wrap">
    <view :class="['movie_normal', likeStateLength === 0 ? 'show' : 'hide']">
      <image :src="aboutLogo" alt="mov" />
      <text>{{ current === 0 ? '无想看的电影' : '无已看的电影' }}</text>
      <view class="click">
        你可以点击右上角的搜索按钮添加想看的电影
      </view>
    </view>
    <view class="movie_data">
      <view
        v-for="item in likeState"
        :key="item.id"
        class="item"
        @tap="moveClick(item.id)"
      >
        <image :src="item.images.large" :alt="item.alt" mode="aspectFill" />
        <view class="text">{{ item.title }}</view>
      </view>
    </view>
  </view>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import Taro from '@tarojs/taro'
import aboutLogo from '../assets/about_logo.png'
import './HomeMovieListUI.scss'

export default defineComponent({
  name: 'MovieListUI',
  props: {
    current: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const store = useStore()
    const likeState = computed(() => store.state.counter.likeState || [])
    const likeStateLength = computed(() => likeState.value.length)

    const moveClick = (id) => {
      Taro.navigateTo({
        url: `/pages/display/details/details?id=${id}`
      })
    }

    return {
      likeState,
      likeStateLength,
      aboutLogo,
      moveClick
    }
  }
})
</script>

<style lang="scss">
@import './HomeMovieListUI.scss';
</style>
