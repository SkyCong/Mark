<template>
  <view class="index_details_wrap">
    <view class="img">
      <image :src="indexDetailsData.imgUrl" alt="img" />
    </view>

    <view class="main">
      <view class="title">{{ indexDetailsData.articleTitle }}</view>

      <view class="prompts">
        <view class="text_a">{{ indexDetailsData.pubDate }}</view>
        <view class="text_b">巴塞电影</view>
        <view class="text_a">|</view>
        <view class="text_a">撰文</view>
        <view class="text_b">{{ indexDetailsData.authorName }}</view>
      </view>

      <view :class="['content', indexDetailsData.description ? '' : 'hide']">
        {{ indexDetailsData.description }}
      </view>

      <view class="article_content">
        <rich-text :nodes="indexDetailsData.articleContent" />
      </view>

      <view class="footer">
        <view class="head">版权声明</view>
        <view class="texts">未经许可，严谨转载和引用。</view>
        <image
          src="http://img.moviebase.cn/img/source/2018/02/c526cc8be95944399a68197c778ee1ab.png@!100"
          alt="footer"
        />
        <view class="tips">巴塞电影</view>
      </view>
    </view>
  </view>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import Taro from '@tarojs/taro'
import http from '../../../utils/fetch'
import './indexDetails.scss'

export default defineComponent({
  name: 'IndexDetails',
  setup() {
    const indexDetailsData = ref({})

    const fetchData = async () => {
      try {
        const id = Taro.getCurrentInstance().router.params.id
        const result = await http({
          url: `https://www.moviebase.cn/uread/api/v3/viewArt/artDetail/${id}`,
          data: {
            platform: 1,
            deviceId: 'AD3E5F1B-9B0C-4DC4-BDBC-59EF431C2D29',
            appVersion: '3.5.0'
          },
          method: 'GET'
        })
        indexDetailsData.value = result.data.article
      } catch (error) {
        console.error('Fetch index details error:', error)
      }
    }

    onMounted(() => {
      fetchData()
    })

    return {
      indexDetailsData
    }
  }
})
</script>

<style lang="scss">
@import './indexDetails.scss';
</style>
