import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
import { connect } from '@tarojs/redux'



@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  setBasicInfo () {
    dispatch(setBasicInfo())
  }
}))

export default class Setting extends Taro.Component {

  config = {
    navigationBarTitleText: '账号'
  }



  constructor (props) {
    super(props)  
    this.state = {
      userInfo: []
    }
  }


  componentWillMount () {
    // this.setState({
    //   userInfo: this.props.
    // })
    // // Taro.getStorage({key:'userInfo'}).then(rst => {   //从缓存中获取用户信息
    // //   console.log(rst)
    // // })
  }

  render () {
    console.log(this.props)
    return (
      <View className='setting_wrap'>
        
        <View className='header list'>
          <AtAvatar image={this.state.userInfo.avatarUrl} circle={true} ></AtAvatar>
          <text>聪聪0501</text>
          <View className='right'>
            <image src={require('../../../assets/right_arrow.png')} alt='right' />
          </View>
        </View>
    
        <View className='hr'></View>  
        <View className='list'>
          <View className='left'>
            <image src={require('../../../assets/movie_list_comment_icon.png')} alt='left' />
          </View>          
          <text>我的消息</text>
          <View className='right'>
            <image src={require('../../../assets/right_arrow.png')} alt='right' />
          </View>
        </View>  

        <View className='hr'></View> 
        <View className='list'>
          <View className='left'>
            <image src={require('../../../assets/movie_list_comment_icon.png')} alt='left' />
          </View>          
          <text>我喜欢的影单</text>
          <View className='right'>
            <image src={require('../../../assets/right_arrow.png')} alt='right' />
          </View>
        </View> 
        {/* <View className='hr_min'></View>   */}
        <View className='list'>
          <View className='left'>
            <image src={require('../../../assets/user_favorite_cards_icon.png')} alt='left' />
          </View>          
          <text>我喜欢的电影卡片</text>
          <View className='right'>
            <image src={require('../../../assets/right_arrow.png')} alt='right' />
          </View>
        </View> 

        <View className='hr'></View> 
        <View className='list'>
          <View className='left'>
            <image src={require('../../../assets/movie_list_comment_icon.png')} alt='left' />
          </View>          
          <text>邀请好友使用</text>
          <View className='right'>
            <image src={require('../../../assets/right_arrow.png')} alt='right' />
          </View>
        </View>
        <View className='list'>
          <View className='left'>
            <image src={require('../../../assets/evaluate_icon.png')} alt='left' />
          </View>          
          <text>给我们评分吧</text>
          <View className='right'>
            <image src={require('../../../assets/right_arrow.png')} alt='right' />
          </View>
        </View> 
        <View className='list'>
          <View className='left'>
            <image src={require('../../../assets/feedback_icon.png')} alt='left' />
          </View>          
          <text>给我们提意见</text>
          <View className='right'>
            <image src={require('../../../assets/right_arrow.png')} alt='right' />
          </View>
        </View> 
        <View className='list'>
          <View className='left'>
            <image src={require('../../../assets/about_icon.png')} alt='left' />
          </View>          
          <text>关于</text>
          <View className='right'>
            <image src={require('../../../assets/right_arrow.png')} alt='right' />
          </View>
        </View> 

        <View className='hr'></View>  
        <View className='list'>
          <View className='left'>
            <image src={require('../../../assets/like_checked.png')} alt='left' />
          </View>          
          <text> 欢迎访问我的网站 www.skycong.xyz </text>
          <View className='right'>
            <image src={require('../../../assets/right_arrow.png')} alt='right' />
          </View>
        </View>  

      </View>
    )
  }
}