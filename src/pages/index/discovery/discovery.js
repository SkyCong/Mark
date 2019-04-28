import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem} from '@tarojs/components'
import http from '../../../utils/fetch'


import './discovery.scss'


class Discovery extends Component {

  config = {
    navigationBarTitleText: '发现'
  }

  constructor(props){
    super(props)
    this.state = {
      bannerData : []
    }
  }


  componentWillMount () {
    this.fetchData()
  }

  async fetchData(){
    let result = await http({
      url: 'http://api.markapp.cn/v160/singles/banner',
      method : 'GET'
    })
    // let res = await http({
    //   url: 'http://api.markapp.cn/mark_web/singles/detail',
    //   method : 'POST',
    //   data: {
    //     id: 1684,
    //     muid: 'ppuCgPJ6/OXUEa000SjtiQ==',
    //     uid: 832059,
        
    //   },
    //   // header:{
    //   //   "Content-Type":"multipart/form-data"
    //   // },
    // })
    this.setState({
      bannerData : result.data.data,
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
                  <image src={value.img_url} alt={value.name} mode='widthFix' />
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
            (this.props.listData || []).map((value) => {
              return (
                <View key={value.pubDate} className="findList">
                  <View className='hr'></View>
                  <image src={value.object.imgUrl} alt={value.object.id} mode='widthFix' lazy-load={true}/>
                  <View className='name'>{value.object.title}</View>
                  <View className='like'>
                    <image src={require('../../../assets/daily_card_like_unchecked.png')} alt='icon' mode='widthFix' />
                    {'100'}
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
