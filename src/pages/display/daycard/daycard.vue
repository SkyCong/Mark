<template>
  <view class="daycard_wrap">
    <swiper class="card_list">
      <swiper-item v-for="item in cardData" :key="item.id">
        <view class="card">
          <image :src="item.img_url" alt="icon" mode="aspectFill" :lazy-load="true" />
          <view class="content">
            <view class="textC">{{ item.content }}</view>
            <view class="textend">——{{ item.name }}</view>
          </view>
        </view>
      </swiper-item>
    </swiper>

    <view class="operation">
      <view class="see_movie">
        <image :src="icons.detail" alt="icon1" />
        查看电影
      </view>
      <view class="share_movie icon_movie">
        <image :src="icons.share" alt="icon3" />
        分享
      </view>
      <view class="like_movie icon_movie">
        <image :src="icons.like" alt="icon2" />
        喜欢
      </view>
    </view>
  </view>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import http from '../../../utils/fetch'
import _ from 'lodash'
import detailIcon from '../../../assets/daily_card_detail_icon.png'
import shareIcon from '../../../assets/daily_card_share_icon.png'
import likeIcon from '../../../assets/daily_card_like_unchecked.png'
import './daycard.scss'

export default defineComponent({
  name: 'DayCard',
  setup() {
    const cardData = ref([])
    const icons = {
      detail: detailIcon,
      share: shareIcon,
      like: likeIcon
    }

    const fetchData = async () => {
      try {
        const result = await http({
          url: 'https://www.skycong.xyz/api/bins/1cb4p4',
          method: 'GET'
        })
        cardData.value = _.sampleSize(result.data.data, 6)
      } catch (error) {
        console.error('Fetch daycard data error:', error)
      }
    }

    onMounted(() => {
      fetchData()
    })

    return {
      cardData,
      icons
    }
  }
})
</script>

<style lang="scss">
@import './daycard.scss';
</style>
