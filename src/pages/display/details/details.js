import Taro from '@tarojs/taro'
import { View, Swiper, SwiperItem  } from '@tarojs/components'

import http from '../../../utils/fetch'

import './details.scss'


export default class Details extends Taro.Component {

  constructor (props) {
    super(props)
    this.state = {
      detailsData : []
    }
  }

  componentWillMount () {
    this.fetchData()
  }

  async fetchData(){
    let detailsData = await http({
      url: `https://www.skycong.xyz/mark/v160/Mobile/movies/${this.$router.params.id}`,
      method : 'GET'
    })  
    this.setState({
      detailsData : detailsData.data.data
    })
    Taro.setNavigationBarTitle({
      title: detailsData.data.data.name
    })
  }
  
  render () {
    let detailsData = this.state.detailsData
    // console.log(detailsData.photos[0])
    return (
      <View className='details_wrap'>
        <Swiper 
          className='banner'
          duration={300}
          circular
          autoplay>
          {
            detailsData.photos.map((value , index) => {
              return (
                <SwiperItem key={index} >
                  <image src={value} alt='banner' mode='widthFix'/>
                </SwiperItem>
              )
            })
          }
        </Swiper>

        <View className='wat'>
          <View className='like'>
            想看
          </View>
        </View>

        <View className='main'>
          <View className='main'>
            <View className='header'>
              概览
            </View>          
            <View className='movie_content'>

              <View className='list'>
                <View className='left'>
                  上映
                </View> 
                <View className='right'>
                  {detailsData.pubdate}
                </View>                 
              </View>     


              <View className='list'>
                <View className='left'>
                  片长
                </View> 
                <View className='right'>
                  {detailsData.duration}
                </View>                 
              </View>     


              <View className='list'>
                <View className='left'>
                  类型
                </View> 
                <View className='right'>
                  {detailsData.genres}
                </View>                 
              </View>     

              <View className='list'>
                <View className='left'>
                  导演
                </View> 
                <View className='right'>
                  {detailsData.directors}
                </View>                 
              </View>  

              <View className='list'>
                <View className='left'>
                  编剧
                </View> 
                <View className='right'>
                  {detailsData.writers}
                </View>                 
              </View>  

              <View className='list'>
                <View className='left'>
                  主演
                </View> 
                <View className='right'>
                  {detailsData.casts}
                </View>                 
              </View>  

              <View className='list last'>
                {detailsData.summary}               
              </View>  
            </View>
          </View>

        </View>

      </View>

    )
  }
}