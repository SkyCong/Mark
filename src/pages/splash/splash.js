import Taro, { Component } from '@tarojs/taro'
import { View , Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './splash.scss'
import { setBasicInfo } from '../../actions/counter'
import { func } from 'prop-types';

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  setBasicInfo () {
    dispatch(setBasicInfo())
  },
}))

class Splash extends Component {
  config = {
    navigationBarTitleText: 'SKY_Mark'
  }

  constructor (props) {
    super(props)
    // wx.getSetting({
    //   success() {
    //     Taro.redirectTo({
    //       url: '/pages/index/index'
    //     })
    //   },
    //   fail() {
    //     this.getUserInfo()
    //   }
    // })
  }
  componentWillMount () {

  }
  
  getUserInfo = (userInfo) => {
    if(userInfo.detail.userInfo){   //同意
      
      this.props.counter.basicinfo = userInfo.detail.userInfo
      
      // this.props.setBasicInfo(userInfo.detail.userInfo) //将用户信息存入redux
        Taro.redirectTo({
          url: '/pages/index/index'
        })
    } 
    else{ //拒绝,保持当前页面，直到同意
       console.log('jujue')
    }
  }


  render () {
    console.log(this.props.counter)
    return (
      <View className='aplash_wrap'> 
        <image src={require('../../assets/login_bg.jpg')} alt='bg' mode='widthFix'/>
        <View className='logo'>
          <image src={require('../../assets/logo_bg.png')} alt='logo'/>
          <Button className='login' open-type="getUserInfo" onGetuserinfo={this.getUserInfo}>
            授权登录
          </Button>  
        </View>
      </View>
    )
  }
}

export default Splash
