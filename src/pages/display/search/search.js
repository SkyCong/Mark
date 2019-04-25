import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
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
      lineData : [],
      val: [],
      sta: []
    }
    this.fetchData()
  }

  async fetchData(){
    let line = await http({      
      // url: 'https://douban.uieee.com/v2/movie/search',

      url: 'http://api.markapp.cn/v160/resources/lines?',

      method : 'GET',
    })
    let result = await http({      
      // url: 'https://douban.uieee.com/v2/movie/search',
      url: 'http://t.yushu.im/v2/movie/search',

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
      searchData : result.data.subjects,
      lineData : line.data.data
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
      dis : false
    })
  }

  render () {

    console.log(this.state.sta)

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
            <View className='texts'>{lineData.word}</View>
            <View className='textend'>{lineData.title}</View>
          </View>

          <View className={`search_data ${dis === false ? 'hide' : ''}`}>
            {
              this.state.searchData.map(value => {
                return (
                  <View key={value.id} className='item'>
                    <image src={value.images.large} alt={value.alt} />
                  
                    <View className='like' onClick={
                      ()=>{
                        var index = this.state.sta.indexOf(value.id)
                        if(index === -1){
                          this.setState({
                            sta : [
                              ...this.state.sta,
                              value.id//value.id不用展开
                            ]
                          })                          
                        }
                        else{
                          this.state.sta.splice(index,1)  
                          this.setState({
                            sta : this.state.sta,
                          })  
                        }
                      }
                    }>
                      {this.state.sta.includes(value.id) ? '✔️' : '+'}
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
//   })value.id === this.state.sta ? '✔️' : '+'
//indexOf(find,