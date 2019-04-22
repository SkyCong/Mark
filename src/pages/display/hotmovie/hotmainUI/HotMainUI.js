import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { Fragment } from 'react';

import './hotmainUI.scss'


export default class HotMainUI extends Taro.Component {

  
  render () {
    return (
      <View id='main_wrap'>
        {
          this.props.ingData.map((value) => {
            return (
              <View key={value.id} className='movie_list'>
                <View className='movie_img'>
                  <image src={value.imgages.small} alt={value.title} mode='widthFix' />
                </View>
                <View className='movie_content'>
                  <View className='title'>
                    {value.title}
                  </View>
                  <View className='data'>
                    {value.pubdates}
                  </View>
                  <View className='explain'>
                    {value.durations}
                  </View>
                  <View className='score'>
                    {value.rating.average}
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