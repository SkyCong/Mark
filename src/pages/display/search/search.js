import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import http from '../../../utils/fetch'

import './search.scss'

export default class Setting extends Taro.Component {
  // config = {
  //   window: {
  //     navigationBarTitleText: '分类查找'
  //   }
  // }

  constructor (props) {
    super(props)
    this.state = {
      dis: true,
      searchData : []
    }
    this.fetchData()
  }

  async fetchData(){

    let result = await http({
      url: 'https://douban.uieee.com/v2/movie/search',
      data: {
        count: 12,
        q:	'01',
        start: 0
      },
      header:{
        "Content-Type":"json"
      },
      method : 'GET',
    })
    console.log(result)

    this.setState({
      searchData : result
    })
  }

  // watchSearch : function (e) {
  //   var val = e.detail.value;
  //   this.setData({
  //       telphone: val
  //   });
  // }
  // listenerPhoneInput(e){ 
  //   console.log(e.detail.value)
  // }
  

  // componentWillMount () {}
  // onClick={() => {
  //   // this.setState({
  //   //   dis : !this.state.dis
  //   // })
  //   console.log(0)
  // }}
  render () {
    // console.log(this.state.searchData)
    return (
      <View id='search_wrap'>
        <View className='search_input' >
          <input 
            placeholder="输入电影名/导演/演员/编剧" 
            auto-focus 
            // bindinput="listenerPhoneInput"
            
          />
        </View>
        <View className='search_main'>
        
          <View className={`search_tips ${dis === false ? 'show' : 'hide'}`}>
            <image src={require('../../../assets/movie_search_word_icon.png')} alt='icon' />
            <View className='texts'>生活就像一盒巧克力，你永远不知道你会得到什么。</View>
            <View className='textend'>---《阿甘正传》</View>
          </View>

          <View className={`search_data ${dis === false ? 'hide' : 'show'}`}>
            {
              this.state.searchData .map(value => {
                return (
                  <View key={value.id} className='item'>
                    <image src={value.images.small} alt={value.alt} />
                  
                    <View className='like'>
                      +
                    </View>

                    <View className='text'>
                      {value.title}
                    </View>

                  </View>
                )
              })
            }
          </View>        
        </View>

      </View>
    )
  }
}