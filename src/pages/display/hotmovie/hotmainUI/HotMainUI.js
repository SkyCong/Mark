import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import { AtRate } from 'taro-ui'

import './HotMainUI.scss'


export default class HotMainUI extends Taro.Component {
  
  render () {

    return (
      <View className='main_wrap'>
        {
          (this.props.ingData || this.props.afterData).map(value => {
            return (
              <View key={value.id} className='movie_list'>
                <View className='movie_img'>
                  <image src={value.images.small} alt={value.title} />
                </View>
                <View className='movie_content'>
                  <View className='title'>
                    {value.title}
                  </View>
                  <View className='data text'>
                    {value.pubdates}
                  </View>
                  <View className='explain text'>
                    {value.durations}
                  </View>
                  <View className='score text'>
                    <AtRate 
                      className='xing'
                      value={value.rating.average/2} 
                      size={10}
                    />
                    {value.rating.average}分（豆瓣）
                  </View>
                </View>
              </View>
            )
          })
        }
      </View>

    )
  }
}