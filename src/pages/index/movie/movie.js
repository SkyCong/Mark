import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './movie.scss'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  like () {
    dispatch(like())
  },
}))

export default class Movie extends Taro.Component {

  config = {
    navigationBarTitleText: '我的电影'
  }

  constructor (props) {
    super(props)
  }


  componentWillMount () {}
  
  render () {

    return (
      <View className='movie_wrap'>
        <View className='movie_data'>
          {
            this.props.counter.likeState.map(value => {
              return (
                <View key={value.id} className='item'>
                  <image src={value.images.large} alt={value.alt} />
                  <View className='text'>
                    {value.title}
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