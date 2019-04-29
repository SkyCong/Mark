import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import http from '../../../utils/fetch'

import './classDisplay.scss'

export default class ClassDisplay extends Taro.Component {
  config = {
    navigationBarTitleText: '导演'
  }


  constructor (props) {
    super(props)
    this.state={
      itemData : []
    }
  }

  componentWillMount () {
    this.fetchData()
  }
  
  async fetchData(){

    let resultList = await http({
      url: 'http://localhost:9000/data',
      method : 'GET'
    })
    this.setState({
      itemData : resultList.data.slice(0,10)
    })

  }



  render () {
    return (
      <View id='class_display_wrap'>
        {
          this.state.itemData.map(value => {
            return (
              <View key={value.id} className="item">
                <image src={value.img_url} alt={value.name} lazy-load={true}/>
                <View className='text'>{value.name}</View>
                <View className='tips'>
                  <image src={require('../../../assets/like_unchecked.png')} alt='icon' />
                  100
                </View>
              </View>
            )
          })
        }
      </View>
    )
  }
}