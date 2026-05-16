<template>
  <view id="class_display_wrap">
    <view v-for="item in itemData" :key="item.id" class="item">
      <image :src="item.img_url" :alt="item.name" mode="aspectFill" :lazy-load="true" />
      <view class="text">{{ item.name }}</view>
      <view class="tips">
        <image :src="likeIcon" alt="icon" />
        100
      </view>
    </view>
  </view>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import http from '../../../utils/fetch'
import likeIcon from '../../../assets/like_unchecked.png'
import './classDisplay.scss'

export default defineComponent({
  name: 'ClassDisplay',
  setup() {
    const itemData = ref([])

    const fetchData = async () => {
      try {
        const resultList = await http({
          url: 'http://localhost:9000/data',
          method: 'GET'
        })
        itemData.value = resultList.data.slice(0, 10)
      } catch (error) {
        console.error('Fetch class display data error:', error)
      }
    }

    onMounted(() => {
      fetchData()
    })

    return {
      itemData,
      likeIcon
    }
  }
})
</script>

<style lang="scss">
@import './classDisplay.scss';
</style>
