import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './MovieListUI.scss'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  like () {
    dispatch(like())
  },
}))

export default class MovieListUI extends Taro.Component {

  constructor (props) {
    super(props)
  }


  componentWillMount () {}
  
  render () {
    // console.log(this.props.data)
    return (
      <View className='movie_data'>
        {
          this.props.counter.likeState.map(value => {
            return (
              <View key={value.id} className='item' onClick={ () => {
                Taro.navigateTo({
                  url: `/pages/display/details/details?id=${value.id}`
                })
              }}> 
                <image src={value.images.large} alt={value.alt} lazy-load={true}/>
                <View className='text'>
                  {value.title}
                </View>
              </View>
            )
          })
        }
      </View>        
    )
  }

}