import Taro from '@tarojs/taro'
import { View , Swiper, SwiperItem } from '@tarojs/components'
import { AtTabBar }  from 'taro-ui'
import { HotMainUI } from './hotmainUI/HotMainUI'

import http from '../../../utils/fetch'

import './daycard.scss'


export default class DayCard extends Taro.Component {
  config = {
    navigationBarTitleText: '每日电影卡片推荐'
  }


  constructor (props) {
    super(props)
    this.state = {

    }
    // this.fetchData()
  }

  // async fetchData(){
  //   let resultIng = await http({
  //     url: 'http://api.markapp.cn/v160/movies/intheaters',
  //     method : 'GET'
  //   })
  //   let resultAfter = await http({
  //     url: 'https://api.douban.com/v2/movie/coming_soon',
  //     data: {
  //       apikey: '0b2bdeda43b5688921839c8ecb20399b',
  //       start: 0,
  //     },
  //     header:{
  //       "Content-Type":"json"
  //     },
  //     method : 'GET'
  //   })    

  //   this.setState({
  //     ingData : resultIng.data.subjects,
  //     afterData: resultAfter.data.subjects
  //   })

  // }
  aaa(e){
    console.log(e)
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }
  
  render () {
    return (
      <View id='daycard_wrap'>
        <Swiper
            className='card_list'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            indicatorDots
            onChange="aaa"
        >
          <SwiperItem >
            <View className='card'>
              <image src={require('../../../assets/movie_search_word_icon.png')} alt='icon' />
              <View className='content'>
                <View className='textC'>生活就像一盒巧永远不知道你会得克力，你永远不知道你会得到什么。</View>
                <View className='textE'>生活巧克力，你永远不知道你巧克力，你永远不知道你会会就像一盒巧克力，你永远不知道你会得到什么。</View>
                <View className='textend'>---《阿甘正传》</View>
              </View>
            </View>
          </SwiperItem>
          


          <SwiperItem >
            <View className='card'>
              <image src={require('../../../assets/movie_search_word_icon.png')} alt='icon' />
              <View className='content'>
                <View className='textC'>生活就像一盒巧永远不知道你会得克力，你永远不知道你会得到什么。</View>
                <View className='textE'>生活巧克力，你永远不知道你巧克力，你永远不知道你会会就像一盒巧克力，你永远不知道你会得到什么。</View>
                <View className='textend'>---《阿甘正传》</View>
              </View>
            </View>
          </SwiperItem>




          <SwiperItem >
            <View className='card'>
              <image src={require('../../../assets/movie_search_word_icon.png')} alt='icon' />
              <View className='content'>
                <View className='textC'>生活就像一盒巧永远不知道你会得克力，你永远不知道你会得到什么。</View>
                <View className='textE'>生活巧克力，你永远不知道你巧克力，你永远不知道你会会就像一盒巧克力，你永远不知道你会得到什么。</View>
                <View className='textend'>---《阿甘正传》</View>
              </View>
            </View>
          </SwiperItem>



        </Swiper>

        <View className='operation'>

          <View className='see_movie'>

          </View>

          <View className='like_movie'>

          </View>

          <View className='share_movie'>

          </View>
        </View>

      </View>

    )
  }
}