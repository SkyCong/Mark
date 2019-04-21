
import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem} from '@tarojs/components'
import http from '../../utils/fetch'


import './discovery.scss'


class Discovery extends Component {
  constructor(props){
    super(props)
    this.state = {
      bannerData : [],
      listData: []
    }
    this.fetchData()
  }

  async fetchData(){
    let result = await http({
      url: 'http://api.markapp.cn/v160/singles/banner?',
      method : 'GET'
    })
    // let resultList = await http({
    //   url: 'http://api.markapp.cn/v160/singles/list',
    //   method : 'POST',
    //   data: {
    //     muid:	'ppuCgPJ6/OXUEa000SjtiQ==',
    //     uid:	832059,
    //     count: 10,
    //     start: 0
    //   },
    //   credentials : 'include'
    // })
    let resultList = await http({
      url: 'http://localhost:9000/data',
      method : 'GET'
    })
    this.setState({
      bannerData : result.data.data,
      listData : resultList.data
    })

  }

  render () {

    return (
      <View className='index'>

        <View className='search'>
          <Text>搜索</Text>
        </View>

        
        <Swiper 
          className='banner'
          indicatorColor='#35393b'
          indicatorActiveColor='#fff'
          circular
          indicatorDots
          autoplay>
          {
          this.state.bannerData.map((value) => {
              return (
                <SwiperItem key={value.id} >
                  <image src={value.img_url} alt={value.name} mode='widthFix' className='bbb'/>
                </SwiperItem>
              )
            })
          }
        </Swiper>
     

        <View className='nav'>
          <View className='nav_list'>
            <View className='nav_icon'></View>
            <text>分类查找</text>
          </View>
          <View className='nav_list'>
            <View className='nav_icon'>20</View>
            <text>每日电影卡片</text>
          </View>
          <View className='nav_list'>
            <View className='nav_icon'></View>
            <text>影院热映</text>
          </View>
        </View>

        <View className='findWrap'>
          {
            this.state.listData.map((value) => {
              return (
                <View key={value.id} className="findList">
                  <View className='hr'></View>
                  <image src={value.img_url} alt={value.name} mode='widthFix' />
                  <View className='name'>{value.name}</View>
                  <View className='like'>
                    <image src={require('../../assets/daily_card_like_unchecked.png')} alt='icon' mode='widthFix' />
                    {value.likes}
                  </View>         
                </View>
              )
            })
          }
        </View>





      </View>
    )
  }
}

export default Discovery
