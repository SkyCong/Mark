<template>
  <view class="class_wrap">
    <view v-for="item in navData" :key="item.name" class="navList">
      <view class="navListFrist">
        <image :src="item.img_url" :alt="item.name" mode="widthFix" />
        <text>{{ item.name }}</text>
      </view>
      <view
        v-for="cat in item.cat"
        :key="cat.id"
        class="navListItem"
        @tap="navigateToClassDisplay"
      >
        {{ cat.name }}
      </view>
    </view>
  </view>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import Taro from '@tarojs/taro'
import http from '../../../utils/fetch'
import './class.scss'

export default defineComponent({
  name: 'Class',
  setup() {
    const navData = ref([])

    const fetchData = async () => {
      try {
        const result = await http({
          url: 'https://www.skycong.xyz/mark/v160/singles/groupcat',
          method: 'GET'
        })
        modifyData(result.data.data)
      } catch (error) {
        console.error('Fetch class data error:', error)
      }
    }

    const modifyData = (res) => {
      for (let item of res) {
        if (item.cat.length < 6) {
          for (let i = 0, length = 6 - item.cat.length; i < length; i++) {
            item.cat.push({ name: ' ', id: `empty-${i}` })
          }
        } else if ((item.cat.length - 6) % 4 !== 0) {
          for (
            let i = 0, length = 4 - ((item.cat.length - 6) % 4);
            i < length;
            i++
          ) {
            item.cat.push({ name: ' ', id: `empty-${i}` })
          }
        }
      }
      navData.value = res
    }

    const navigateToClassDisplay = () => {
      Taro.navigateTo({
        url: '/pages/display/class_display/classDisplay'
      })
    }

    onMounted(() => {
      fetchData()
    })

    return {
      navData,
      navigateToClassDisplay
    }
  }
})
</script>

<style lang="scss">
@import './class.scss';
</style>
