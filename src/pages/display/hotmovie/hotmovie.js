import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { Fragment } from 'react';
import { AtTabBar }  from 'taro-ui'
import { HotMainUI } from './hotmainUI/HotMainUI'

import http from '../../../utils/fetch'

import './hotmovie.scss'


export default class HotMovie extends Taro.Component {
  // config = {
  //   window: {
  //     navigationBarTitleText: '分类查找'
  //   }
  // }


  constructor (props) {
    super(props)
    this.state = {
      current: 0,
      ingData : [],
      afterData : []
    }
    this.fetchData()
  }

  async fetchData(){
    let resultIng = await http({
      url: 'http://api.markapp.cn/v160/movies/intheaters',
      method : 'GET'
    })
    // let resultAfter = await http({
    //   url: 'https://api.douban.com/v2/movie/coming_soon?',
    //   data: {
    //     count: 10,
    //     start: 0
    //   },
    //   method : 'GET'
    // })
    this.setState({
      ingData : resultIng.data.subjects.slice(0,20)
    })

  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }


  render () {
    console.log(this.state.ingData)
    return (
      <View id='hot_wrap'>
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

        <View className='main'>
          { 
            this.state.current === 0 
            ? 
            <HotMainUI ingData={this.state.ingData}/> 
            : 
            <HotMainUI afterData={this.state.afterData}/>
          }    
          {/* { 
            this.state.current === 0 
            ? 
            <HotMainUI ingData={this.state.ingData}/> 
            : 
            <HotMainUI afterData={this.state.afterData}/>
          } */}

        </View>
      </View>

    )
  }
}