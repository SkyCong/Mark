<template>
  <view class="setting_wrap">
    <view class="header list">
      <image
        v-if="userInfo.avatarUrl"
        class="avatar"
        :class="{ 'avatar--circle': true }"
        :src="userInfo.avatarUrl"
        mode="aspectFill"
      />
      <text>{{ userInfo.nickName }}</text>
      <view class="right">
        <image :src="icons.rightArrow" alt="right" />
      </view>
    </view>

    <view class="hr"></view>
    <view class="list">
      <view class="left">
        <image :src="icons.comment" alt="left" />
      </view>
      <text>我的消息</text>
      <view class="right">
        <image :src="icons.rightArrow" alt="right" />
      </view>
    </view>

    <view class="hr"></view>
    <view class="list">
      <view class="left">
        <image :src="icons.comment" alt="left" />
      </view>
      <text>我喜欢的影单</text>
      <view class="right">
        <image :src="icons.rightArrow" alt="right" />
      </view>
    </view>
    <view class="list">
      <view class="left">
        <image :src="icons.favoriteCards" alt="left" />
      </view>
      <text>我喜欢的电影卡片</text>
      <view class="right">
        <image :src="icons.rightArrow" alt="right" />
      </view>
    </view>

    <view class="hr"></view>
    <view class="list">
      <view class="left">
        <image :src="icons.comment" alt="left" />
      </view>
      <text>邀请好友使用</text>
      <view class="right">
        <image :src="icons.rightArrow" alt="right" />
      </view>
    </view>
    <view class="list">
      <view class="left">
        <image :src="icons.evaluate" alt="left" />
      </view>
      <text>给我们评分吧</text>
      <view class="right">
        <image :src="icons.rightArrow" alt="right" />
      </view>
    </view>
    <view class="list">
      <view class="left">
        <image :src="icons.feedback" alt="left" />
      </view>
      <text>给我们提意见</text>
      <view class="right">
        <image :src="icons.rightArrow" alt="right" />
      </view>
    </view>
    <view class="list">
      <view class="left">
        <image :src="icons.about" alt="left" />
      </view>
      <text>关于</text>
      <view class="right">
        <image :src="icons.rightArrow" alt="right" />
      </view>
    </view>

    <view class="hr"></view>
    <view class="list">
      <view class="left">
        <image :src="icons.likeChecked" alt="left" />
      </view>
      <text>欢迎访问我的网站 www.skycong.xyz</text>
      <view class="right">
        <image :src="icons.rightArrow" alt="right" />
      </view>
    </view>
  </view>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import rightArrow from '../../../assets/right_arrow.png'
import comment from '../../../assets/movie_list_comment_icon.png'
import favoriteCards from '../../../assets/user_favorite_cards_icon.png'
import evaluate from '../../../assets/evaluate_icon.png'
import feedback from '../../../assets/feedback_icon.png'
import about from '../../../assets/about_icon.png'
import likeChecked from '../../../assets/like_checked.png'
import './setting.scss'

export default defineComponent({
  name: 'Setting',
  setup() {
    const store = useStore()
    const userInfo = computed(() => store.state.counter.basicinfo || {})
    const icons = {
      rightArrow,
      comment,
      favoriteCards,
      evaluate,
      feedback,
      about,
      likeChecked
    }

    return {
      userInfo,
      icons
    }
  }
})
</script>

<style lang="scss">
@import './setting.scss';
</style>
