<template>
  <view class="movie_wrap">
    <view class="head">
      <tab-bar
        class="check"
        selected-color="#000"
        color="#496069"
        :tab-list="tabList"
        @tap="handleClick"
        :current="current"
      />
      <view class="tips">
        <view :class="['hover', current === 0 ? 'hover_left' : 'hover_right']"></view>
      </view>
    </view>

    <movie-list-ui :current="current" />
  </view>
</template>

<script>
import { defineComponent, ref } from 'vue'
import TabBar from './TabBar.vue'
import MovieListUI from './HomeMovieListUI.vue'
import './HomeMovie.scss'

export default defineComponent({
  name: 'Movie',
  components: {
    TabBar,
    MovieListUI
  },
  setup() {
    const current = ref(0)
    const tabList = [
      { title: '想看' },
      { title: '已看' }
    ]

    const handleClick = (value) => {
      current.value = value
    }

    return {
      current,
      tabList,
      handleClick
    }
  }
})
</script>

<style lang="scss">
@import './HomeMovie.scss';
</style>
