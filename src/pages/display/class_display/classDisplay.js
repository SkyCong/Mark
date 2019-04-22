import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import http from '../../../utils/fetch'

import './classDisplay.scss'

export default class ClassDisplay extends Taro.Component {
  // config = {
  //   window: {
  //     navigationBarTitleText: '分类查找'
  //   }
  // }


  constructor (props) {
    super(props)
    this.state={
      itemData : []
    }
    this.fetchData()
  }


  async fetchData(){
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
                <image src={value.img_url} alt={value.name} />
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