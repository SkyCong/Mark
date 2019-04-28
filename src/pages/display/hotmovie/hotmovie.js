import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabBar }  from 'taro-ui'
import { HotMainUI } from './hotmainUI/HotMainUI'

import http from '../../../utils/fetch'

import './hotmovie.scss'


export default class HotMovie extends Taro.Component {

  config = {
    navigationBarTitleText: '影院热映'
  }

  constructor (props) {
    super(props)
    this.state = {
      current: 0,
      ingData : [],
      afterData : []
    }
  }

  componentWillMount () {
    this.fetchData()
  }

  async fetchData(){
    let resultIng = await http({
      url: 'http://api.markapp.cn/v160/movies/intheaters',
      method : 'GET'
    })
    let resultAfter = await http({
      url: 'https://www.skycong.xyz/v2/movie/coming_soon',
      data: {
        apikey: '0b2bdeda43b5688921839c8ecb20399b',
        start: 0,
      },
      header:{
        "Content-Type":"json"
      },
      method : 'GET'
    })    

    this.setState({
      ingData : resultIng.data.subjects,
      afterData: resultAfter.data.subjects
    })

  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }
  
  render () {
    return (
      <View className='hot_wrap'>
        <AtTabBar
          className='check'
          selectedColor={'#000'}
          color={'#496069'}
          tabList={[
            { title: '热映' },
            { title: '待映' }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />

        { 
          this.state.current === 0 
          ? 
          <HotMainUI Data={this.state.ingData} /> 
          : 
          <HotMainUI Data={this.state.afterData} />
        }    
      </View>

    )
  }
}