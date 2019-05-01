import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import http from '../../../utils/fetch'

import './indexDetails.scss'


export default class indexDetails extends Taro.Component {

  constructor (props) {
    super(props)
    this.state = {
      indexDetailsData : []
    }
  }

  componentWillMount () {
    this.fetchData()
  }

  async fetchData(){
    let result = await http({
      url: `https://www.moviebase.cn/uread/api/v3/viewArt/artDetail/${this.$router.params.id}`,
      data: {
        platform : 1,
        deviceId : 'AD3E5F1B-9B0C-4DC4-BDBC-59EF431C2D29',
        appVersion : '3.5.0'
      },
      method : 'GET'
    })  
    this.setState({
      indexDetailsData : result.data.article
    })
    console.log(result)
  }

  handleLikeClick () {
    // this.setState({
    //   current: value
    // })
    console.log('asd')
    // <View className='play'></View>

  }
  
  render () {
    // console.log(this.$router.params.id)
    return (
      <View className='index_details_wrap'>
        <View className='img'>
          <image src={indexDetailsData.imgUrl} alt='img'/>
        </View>

        <View className='main'>
        
          <View className='title'>
            {indexDetailsData.articleTitle}
          </View>

          <View className='prompts'>
            <View className='text_a'>{indexDetailsData.pubDate}</View>
            <View className='text_b'>巴塞电影</View>
            <View className='text_a'>|</View>
            <View className='text_a'>撰文</View>
            <View className='text_b'>{indexDetailsData.authorName}</View>
          </View>

          <View className={`content ${indexDetailsData.description ? '' : 'hide'}`}>
            {indexDetailsData.description}
          </View>

          <View className='article_content'>
            <RichText nodes={indexDetailsData.articleContent} />
          </View>

          <View className='footer'>
            <View className='head'>版权声明</View>
            <View className='texts'>未经许可，严谨转载和引用。</View>
            <image src='http://img.moviebase.cn/img/source/2018/02/c526cc8be95944399a68197c778ee1ab.png@!100' alt='footer'/>
            <View className='tips'>巴塞电影</View>
          </View>
        </View>

      </View>

    )
  }
}