<template>
  <view class="aplash_wrap">
    <view class="splash_bg_loop">
      <image class="splash_bg_img" :src="loginBg" alt="bg" mode="aspectFill" />
      <image class="splash_bg_img" :src="loginBg" alt="bg" mode="aspectFill" />
    </view>
    <view class="logo">
      <image :src="logoBg" alt="logo" />
      <button class="login" open-type="getUserInfo" @getuserinfo="getUserInfo">
        授权登录
      </button>
      <button class="login direct_login" @tap="skipLogin">
        直接登录
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
        Taro.switchTab({
          url: '/pages/index/index'
        })
      } else {
        console.log('拒绝授权')
      }
    }

    const skipLogin = () => {
      Taro.switchTab({
        url: '/pages/index/index'
      })
    }

    return {
      loginBg,
      logoBg,
      getUserInfo,
      skipLogin
    }
  }
})
</script>

<style lang="scss">
@import './splash.scss';
</style>
