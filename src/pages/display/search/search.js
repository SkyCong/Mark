import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import http from '../../../utils/fetch'
import { AtInput }  from 'taro-ui'

import './search.scss'

export default class Setting extends Taro.Component {
  config = {
    navigationBarTitleText: '搜索'
  }

  constructor (props) {
    super(props)
    this.state = {
      dis: false,
      del: false,
      searchData : [],
      val: []
    }
    this.fetchData()
  }

  async fetchData(){

    let result = await http({      
      url: 'https://douban.uieee.com/v2/movie/search',

      // url: 'https://www.skycong.xyz/v2/movie/search',
      data: {
        count: 12,
        q: this.state.val,
        start: 0
      },
      header:{
        "Content-Type":"json"
      },
      method : 'GET',
    })

    this.setState({
      searchData : result.data.subjects
    })
  }


  handleChange(val) { 
    if(val === ''){
      this.setState({
        dis : false,
        del : false
      })
    } 
    else{
      this.setState({
        val ,
        dis : true,
        del : true
      },() => {
        this.fetchData()
      })
    }
  }

  handleClick() { 
    this.setState({
      val : '',
      del : false,
      dis : false,
    })
  }

  render () {
    console.log(this.state.val)
    return (
      <View id='search_wrap'>
        <View className='search_input' >
          <AtInput
            name='value'
            type='text'
            title=''
            placeholder='输入电影名/导演/演员/编剧'
            value={this.state.val}
            onChange={this.handleChange.bind(this)}
          />
          <View 
            className={`del ${del === true ? 'show' : 'hide'}`}
            onClick={this.handleClick.bind(this)}
          >
            <image src={require('../../../assets/del.png')} alt='del' />
          </View>
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
                    <image src={value.images.large} alt={value.alt} />
                  
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


// config = {
//   navigationBarTitleText: 'loading...'
// }

// state = {
//   swiperList: [],
//   detail: {}
// }

// constructor(props) {
//   super(props)

//   this.swiperList = []
// }

// async fetchData() {
//   let result = await fetch({
//     url: 'http://localhost:9001/data'
//   })

//   Taro.setNavigationBarTitle({
//     title: result.data.name
//   })