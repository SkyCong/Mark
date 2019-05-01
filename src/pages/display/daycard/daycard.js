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
  }
  componentWillMount () {
    this.fetchData()
  }

  async fetchData(){
    let that =this
    await http({
      url: 'https://www.skycong.xyz/api/bins/1cb4p4',
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
        >
         {
          (this.state.cardData || []).map(value => {
              return (
                <SwiperItem key={value.id}>
                  <View className='card'>
                    <image src={value.img_url} alt='icon' lazy-load={true}/>
                    <View className='content'>
                      <View className='textC'>{value.content}</View>
                      <View className='textend'>——{value.name}</View>
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
            <image src={require('../../../assets/daily_card_detail_icon.png')} alt='icon1' />
            查看电影
          </View>

          <View className='share_movie icon_movie'>
            <image src={require('../../../assets/daily_card_share_icon.png')} alt='icon3' />
            分享
          </View>

          <View className='like_movie icon_movie'>
            <image src={require('../../../assets/daily_card_like_unchecked.png')} alt='icon2' />
            喜欢
          </View>
        </View>

      </View>

    )
  }
}