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


  moveClick(id){
    Taro.navigateTo({
      url: `/pages/display/details/details?id=${id}`
    })
  }

  render () {
    let dis = this.props.counter.likeState.length
    return (
      
      <View className='movie_list_wrap'>
        <View className={`movie_normal ${dis === 0 ? 'show' : 'hide'}`} >
          <image src={require('../../../../assets/about_logo.png')} alt='mov' />
          <text>{this.props.current === 0 ? '无想看的电影' : '无已看的电影'}</text>
          <View className='click'>
            你可以点击右上角的搜索按钮添加想看的电影
          </View>
        </View>
        <View className='movie_data'>
          {
            this.props.counter.likeState.map(value => {
              return (
                <View key={value.id} className='item' onClick={this.moveClick.bind(this,value.id)}> 
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