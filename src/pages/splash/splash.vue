<template>
  <view class="aplash_wrap">
    <image :src="loginBg" alt="bg" mode="widthFix" />
    <view class="logo">
      <image :src="logoBg" alt="logo" />
      <button class="login" open-type="getUserInfo" @getuserinfo="getUserInfo">
        授权登录
      </button>
    </view>
  </view>
</template>

<script>
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import Taro from '@tarojs/taro'
import loginBg from '../../assets/login_bg.jpg'
import logoBg from '../../assets/logo_bg.png'
import './splash.scss'

export default defineComponent({
  name: 'Splash',
  setup() {
    const store = useStore()

    const getUserInfo = (userInfo) => {
      if (userInfo.detail.userInfo) {
        store.dispatch('counter/setBasicInfo', userInfo.detail.userInfo)
        Taro.redirectTo({
          url: '/pages/index/index'
        })
      } else {
        console.log('拒绝授权')
      }
    }

    return {
      loginBg,
      logoBg,
      getUserInfo
    }
  }
})
</script>

<style lang="scss">
@import './splash.scss';
</style>
