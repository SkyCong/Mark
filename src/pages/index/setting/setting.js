import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

export default class Setting extends Taro.Component {

  config = {
    navigationBarTitleText: '账号'
  }

  constructor (props) {
    super(props)  
  }

  componentWillMount () {}
  render () {
    return (
      <View>123456</View>
    )
  }
}