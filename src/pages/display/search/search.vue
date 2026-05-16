<template>
  <view id="search_wrap">
    <view class="search_input">
      <input
        class="at-input__input"
        type="text"
        placeholder="输入电影名/导演/演员/编剧"
        :value="val"
        @input="(e) => handleChange(e.detail.value)"
      />
      <view :class="['del', del ? 'show' : 'hide']" @tap="handleClick">
        <image :src="delIcon" alt="del" />
      </view>
    </view>
    <view class="search_main">
      <view :class="['search_tips', dis === false ? 'show' : 'hide']">
        <image :src="searchWordIcon" alt="icon" />
        <view class="texts">{{ lineData.word }}</view>
        <view class="textend">{{ lineData.title }}</view>
      </view>

      <view :class="['search_data', dis === false ? 'hide' : '']">
        <view
          v-for="item in searchData"
          :key="item.id"
          class="item"
          @tap="handleMoveClick(item.id)"
        >
          <image :src="item.images.large" :alt="item.alt" mode="aspectFill" :lazy-load="true" />
          <view class="like" @tap.stop="handleLikeClick(item)">
            {{ id.includes(item.id) ? '✓' : '+' }}
          </view>
          <view class="text">{{ item.title }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import Taro, { useReachBottom } from '@tarojs/taro'
import http from '../../../utils/fetch'
import _ from 'lodash'
import delIcon from '../../../assets/del.png'
import searchWordIcon from '../../../assets/movie_search_word_icon.png'
import './search.scss'

export default defineComponent({
  name: 'Search',
  setup() {
    const store = useStore()
    const dis = ref(false)
    const del = ref(false)
    const page = ref(0)
    const searchData = ref([])
    const lineData = ref({})
    const val = ref('')
    const sta = ref(store.state.counter.likeState || [])
    const id = ref(store.state.counter.id || [])

    const fetchData = async () => {
      try {
        const result = await http({
          url: 'https://www.skycong.xyz/db/v2/movie/search',
          data: {
            count: 12,
            q: val.value,
            start: 12 * page.value
          },
          header: {
            'Content-Type': 'json'
          },
          method: 'GET'
        })

        if (page.value === 0) {
          searchData.value = result.data.subjects
        } else {
          searchData.value = [...searchData.value, ...result.data.subjects]
        }
      } catch (error) {
        console.error('Fetch search data error:', error)
      }
    }

    const fetchDataLine = async () => {
      try {
        const line = await http({
          url: 'https://www.skycong.xyz/mark/v160/resources/lines?',
          method: 'GET'
        })
        lineData.value = line.data.data
      } catch (error) {
        console.error('Fetch line data error:', error)
      }
    }

    const handleChange = _.debounce((value) => {
      if (value === '') {
        dis.value = false
        del.value = false
      } else {
        val.value = value
        dis.value = true
        del.value = true
        page.value = 0
        fetchData()
      }
    }, 500)

    const handleClick = () => {
      val.value = ''
      del.value = false
      dis.value = false
      searchData.value = []
    }

    const handleMoveClick = (id) => {
      Taro.navigateTo({
        url: `/pages/display/details/details?id=${id}`
      })
    }

    const handleLikeClick = (value) => {
      const index = id.value.indexOf(value.id)
      if (index === -1) {
        sta.value = [...sta.value, value]
        id.value = [...id.value, value.id]
      } else {
        id.value.splice(index, 1)
        sta.value.splice(index, 1)
      }
      store.commit('counter/SET_LIKE_STATE', { likeState: sta.value, id: id.value })
    }

    onMounted(() => {
      fetchDataLine()
      fetchData()
    })

    useReachBottom(
      _.debounce(() => {
        page.value = page.value + 1
        fetchData()
      }, 600)
    )

    return {
      dis,
      del,
      searchData,
      lineData,
      val,
      id,
      delIcon,
      searchWordIcon,
      handleChange,
      handleClick,
      handleMoveClick,
      handleLikeClick
    }
  }
})
</script>

<style lang="scss">
@import './search.scss';
</style>
