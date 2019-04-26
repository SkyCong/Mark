import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem} from '@tarojs/components'
import http from '../../../utils/fetch'


import './discovery.scss'


class Discovery extends Component {

  config = {
    navigationBarTitleText: '发现'
  }

  constructor(props){
    super(props)
    this.state = {
      bannerData : [],
      listData: []
    }
    this.fetchData()
  }

  random(lower, upper) {
    return Math.floor(Math.random() * (upper - lower)) + lower;
  }
  //调用：console.log(random(1,100));

  async fetchData(){
    let result = await http({
      url: 'http://api.markapp.cn/v160/singles/banner',
      method : 'GET'
    })
    // let resultList = await http({
    //   url: 'https://hongye567.github.io/static/json/articles',
    //   method : 'GET',
    //   data: {
    //     count: 10,
    //     start: 0
    //   }
    // })
    let resultList = await http({
      url: 'http://localhost:9000/data',
      method : 'GET'
    })
    // console.log(resultList.data)
    let rem = 
    this.setState({
      bannerData : result.data.data,
      listData : resultList.data.slice(10,20)
    })

  }

  render () {
    let myDate = new Date();
    return (
      <View id='wrap'>
        <View className='search'onClick={ () => {
          Taro.navigateTo({
            url: '/pages/display/search/search'
          })
        }}> 
          <View className='search_text'>    
            <image src={require('../../../assets/search_empty_icon.png')} alt='search' mode='widthFix' />
            搜索                   
          </View>
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
          <View className='nav_list' onClick={ () => {
            Taro.navigateTo({
              url: '/pages/display/class/class'
            })
          }}> 
            <View className='nav_icon'></View>
            <text>分类查找</text>
          </View>
          <View className='nav_list' onClick={ () => {
            Taro.navigateTo({
              url: '/pages/display/daycard/daycard'
            })
          }}> 
            <View className='nav_icon'>{myDate.getDate()}</View>
            <text>每日电影卡片</text>
          </View>
          <View className='nav_list' onClick={ () => {
            Taro.navigateTo({
              url: '/pages/display/hotmovie/hotmovie'
            })
          }}> 
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
                    <image src={require('../../../assets/daily_card_like_unchecked.png')} alt='icon' mode='widthFix' lazy-load='true' />
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
