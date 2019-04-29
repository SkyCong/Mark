import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'

import http from '../../utils/fetch'

// import { Search } from '../search'

import { Discovery } from './discovery/discovery'
import { Movie } from './movie/movie'
import { Setting } from './setting/setting'

//json-server ./src/mock/list.json --watch --port 9000
import './index.scss'


class Index extends Component {

  config = {
    onReachBottomDistance: 100
  }
  
  constructor(props){
    super(props)
    this.state = {
      current : 0,
      page: 1,
      listData: []
    }
  }

  
  onReachBottom(){
    if(this.state.current === 0){
      this.setState({
        page : this.state.page + 1
      },() => {
        this.fetchData()
      })      
    }
  }  

  componentWillMount(){
    this.fetchData()
  }

  async fetchData(){
    let result = await http({
      url: `https://www.moviebase.cn/uread/api/v3/topic/content?containerId=c2dd0064cd5e49718b161f34f0baab29&pageContext=${this.state.page}`,
      method : 'GET'
    })
    
    this.setState({
      listData : [
        ...this.state.listData,
        ...result.data.contentList
      ]
    })
  }

  handleClick(current){
    this.setState({
      current
    })
    Taro.setNavigationBarTitle({
      title: current === 0 ? '发现' : current === 1 ? '我的电影' : '账号'
    })
  }

  main(){
    console.log('mamama')
  }
  render () {

    return (

      <View>
        { this.state.current === 0 && <Discovery page={this.state.page} listData={this.state.listData}/>}
        { this.state.current === 1 && <Movie />}
        { this.state.current === 2 && <Setting />}
        <AtTabBar
          fixed
          fontSize={11}
          iconSize={22}
          selectedColor={'#000'}
          color={'#496069'}
          tabList={[
            { title: '发现' , image: require('../../assets/tab_discover_unchecked.png'), selectedImage: require('../../assets/tab_discover_checked.png')},
            { title: '我的电影' , image: require('../../assets/tab_movies_unchecked.png'), selectedImage: require('../../assets/tab_movies_checked.png')},
            { title: '账号',  image: require('../../assets/tab_usercenter_unchecked.png'), selectedImage: require('../../assets/tab_usercenter_checked.png')}
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    )
  }
}

export default Index

