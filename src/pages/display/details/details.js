import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

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
      url: `http://api.markapp.cn/v160/Mobile/movies/${this.$router.params.id}`,
      method : 'GET'
    })  
    this.setState({
      detailsData : detailsData.data.data
    })
    Taro.setNavigationBarTitle({
      title: detailsData.data.data.name
    })

  }

  handleLikeClick () {
    // this.setState({
    //   current: value
    // })
    console.log('asd')
    // <View className='play'></View>

  }
  
  render () {
    console.log(this.state.detailsData)
    return (
      <View className='details_wrap'>
        <View className='img'>
          <image src={detailsData.img_url} alt='img' lazy-load={true}/>
        </View>

        <View className='main'>
        {detailsData.casts}
          <View className='like'>

          </View>

          <View className='pj'>

          </View>

          <View className='header'>

          </View>

          <View className='movie_content'>
            
          </View>
        </View>

      </View>

    )
  }
}