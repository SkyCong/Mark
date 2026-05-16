<template>
  <view class="main_wrap">
    <view
      v-for="item in data"
      :key="item.id"
      class="movie_list"
      @click="handleMoveClick(item.id)"
    >
      <view class="movie_img">
        <image :src="item.images.small" :alt="item.title" mode="aspectFill" :lazy-load="true" />
      </view>
      <view class="movie_content">
        <view class="title">{{ item.title }}</view>
        <view class="data text">{{ item.pubdates }}</view>
        <view class="explain text">{{ item.durations }}</view>
        <view class="score text">
          <rate
            class="xing"
            :value="item.rating.average / 2"
            :size="10"
          />
          {{ item.rating.average }}分（豆瓣）
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { defineComponent } from 'vue'
import Taro from '@tarojs/taro'
import Rate from '../../../../components/Rate.vue'
import './HotMainUI.scss'

export default defineComponent({
  name: 'HotMainUI',
  components: {
    Rate
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const handleMoveClick = (id) => {
      Taro.navigateTo({
        url: `/pages/display/details/details?id=${id}`
      })
    }

    return {
      handleMoveClick
    }
  }
})
</script>

<style lang="scss">
@import './HotMainUI.scss';
</style>
