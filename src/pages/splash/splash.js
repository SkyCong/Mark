import Taro from '@tarojs/taro'
import { View , Button } from '@tarojs/components'

import './splash.scss'

export default class Splash extends Taro.Component {
  config = {
    navigationBarTitleText: 'SKY_Mark'
  }

  constructor (props) {
    super(props)
  }
  componentWillMount () {
    setTimeout(() => {
      Taro.navigateTo({
        url: '/pages/index/index/index'
      })
    },1600)
  }

  // loginCheck(){
  //   console.log('asd')
  // }
  render () {
    return (
      <View className='aplash_wrap'> 
        <image src={require('../../assets/login_bg.jpg')} alt='bg' mode='widthFix'/>
        <View className='logo'>
          <image src={require('../../assets/logo_bg.png')} alt='logo'/>
          <Button className='login' type='primary' open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="bindGetUserInfo">
            授权登录
          </Button>
        </View>
      </View>
    )
  }
}