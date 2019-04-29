import Taro from '@tarojs/taro'
import { View , Swiper, SwiperItem } from '@tarojs/components'
import { AtTabBar }  from 'taro-ui'

import _ from 'lodash'

import http from '../../../utils/fetch'

import './daycard.scss'


export default class DayCard extends Taro.Component {
  config = {
    navigationBarTitleText: '每日电影卡片推荐'
  }


  constructor (props) {
    super(props)
    this.state = {
      cardData: []
    }
    this.fetchData()
  }
  componentWillMount () {
  }

  async fetchData(){
    let that =this
    await http({
      url: 'https://api.myjson.com/bins/1cb4p4',
      method : 'GET'
    })
    .then(result => {
      that.cardData(result.data.data)
    })
  }

  cardData(res) {
    this.setState({
      cardData: _.sampleSize(res,6)
    })     
  }

  render () {
    return (
      <View className='daycard_wrap'>
        <Swiper
            className='card_list'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            indicatorDots
        >
         {
          (this.state.cardData || []).map(value => {
              return (
                <SwiperItem key={value.id}>
                  <View className='card'>
                    <image src={value.img_url} alt='icon' lazy-load={true}/>
                    <View className='content'>
                      <View className='textC'>{value.content}</View>
                      <View className='textend'>———{value.name}</View>
                    </View>
                  </View>
                </SwiperItem>
              )
            }
          )           
         }
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