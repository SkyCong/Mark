import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtTabBar } from 'taro-ui'

// import { Search } from '../search'

import { Discovery } from '../discovery/discovery'
import { Movie } from '../movie/movie'
import { Setting } from '../setting/setting'

//json-server ./src/mock/list.json --watch --port 9000
import './index.scss'


class Index extends Component {

  state = {
    current : 0
  }
  // componentWillReceiveProps (nextProps) {
  //   console.log(this.props, nextProps)
  // }

  // componentWillUnmount () { }

  // componentDidShow () { }

  // componentDidHide () { }

  handleClick(current){
    this.setState({
      current
    })
  }

  render () {

    return (

      <View>
        { this.state.current === 0 && <Discovery />}
        { this.state.current === 1 && <Movie />}
        { this.state.current === 2 && <Setting />}

        <AtTabBar
          fixed
          fontSize={11}
          iconSize={18}
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


//{[<Discovery/>,<Movie/>,<Setting/>]}