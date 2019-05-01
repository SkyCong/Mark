import Taro from '@tarojs/taro'
// import { View } from '@tarojs/components'

export default class WebView extends Taro.Component {

  config = {
    navigationBarTitleText: 'SKYCONG'
  }

  render () {
    return (
      <web-view src="http://www.skycong.xyz/"></web-view>
    )
  }
}