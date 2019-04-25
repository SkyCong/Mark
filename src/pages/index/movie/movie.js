import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'


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
    console.log(this.props.counter.likeState)

    return (
      <View>
        <Button>我的电影</Button>
        <View>{this.props.counter.likeState}</View>
      </View>
    )
  }

}