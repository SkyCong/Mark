import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import http from '../../../utils/fetch'
import { AtInput }  from 'taro-ui'
import { connect } from '@tarojs/redux'
import _ from 'lodash'

import './search.scss'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  like () {
    dispatch(like())
  },
}))

export default class Search extends Taro.Component {

  config = {
    navigationBarTitleText: '搜索',
    onReachBottomDistance: 100
  }

  onReachBottom(){
    this.setState({
      page : this.state.page + 1
    },() => {
      this.fetchData()
    })
  }  

  constructor (props) {
    super(props)
    this.state = {
      dis: false,
      del: false,
      page: 0,
      searchData : [],
      lineData : [],
      val: [],
      sta: this.props.counter.likeState,
      id: this.props.counter.id
    }
  }

  componentWillMount () {
    this.fetchDataLine()
    this.fetchData()
  }

  async fetchData(){
    let result = await http({      
      // url: 'https://douban.uieee.com/v2/movie/search',
      // url: 'http://t.yushu.im/v2/movie/search', 
      url: 'https://www.skycong.xyz/v2/movie/search',
      data: {
        count: 12,
        q: this.state.val,
        start: 12*this.state.page
      },
      header:{
        "Content-Type":"json"
      },
      method : 'GET',
    })

    if(this.state.page === 0){
      this.setState({
        searchData : result.data.subjects
      })   
    }
    else{
      this.setState({
        searchData : [
          ...this.state.searchData,
          ...result.data.subjects
        ]
      })      
    }
    console.log(this.state.searchData)

  }

  async fetchDataLine(){
    let line = await http({      
      // url: 'https://douban.uieee.com/v2/movie/search',
      url: 'http://api.markapp.cn/v160/resources/lines?',
      method : 'GET',
    })
    this.setState({
      lineData : line.data.data
    })
  }

  handleChange = _.debounce((val) => {
    if(val === ''){
      console.log('if')
      this.setState({
        dis : false,
        del : false
      })
    } 
    else{
      console.log('else')
      this.setState({
        val ,
        dis : true,
        del : true
      },() => {
        console.log(val)
        this.fetchData()
      })
    }
    // 没有 action 按钮情况下使用
  }, 500)

 

  handleClick() { 
    this.setState({
      val : '',
      del : false,
      dis : false
    })
  }

  handleMoveClick(id) { 
    Taro.navigateTo({
      url: `/pages/display/details/details?id=${id}`
    })
  }

  handleLikeClick=(value,e) => { 
    e.stopPropagation()
    var index = this.state.id.indexOf(value.id)

    if(index === -1){
      this.setState({
        sta : [
          ...this.state.sta,
          value//value.id不用展开
        ],
        id : [
          ...this.state.id,
          value.id//value.id不用展开
        ]
      },function(){
        this.props.counter.id = this.state.id
        this.props.counter.likeState = this.state.sta
      }
    )                          
    }
    else{
      this.state.id.splice(index,1) 
      this.state.sta.splice(index,1) 
      this.setState({
        sta : this.state.sta
        },function(){
          this.props.counter.id = this.state.id
          this.props.counter.likeState = this.state.sta
        }
      ) 
    }
  }

  render () {
    
    // console.log(this.props.counter.likeState)
    // console.log(this.state.val)
    // console.log(this.state.id)

    return (
      <View id='search_wrap'>
        <View className='search_input' >
          <AtInput
            name='value'
            type='text'
            title=''
            placeholder='输入电影名/导演/演员/编剧'
            value={`${this.state.val}`}
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
              (this.state.searchData || []).map(value => {
                return (
                  <View key={value.id} className='item' onClick={this.handleMoveClick.bind(this,value.id)}> 
                    <image src={value.images.large} alt={value.alt} lazy-load={true}/>
                  
                    <View className='like' onClick={this.handleLikeClick.bind(this,value)}>
                      {this.state.id.includes(value.id) ? '✔️' : '+'}    
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
