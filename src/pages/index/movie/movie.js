import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabBar }  from 'taro-ui'
import { MovieListUI } from './movielist/MovieListUI'

import './movie.scss'


export default class HotMovie extends Taro.Component {

  config = {
    navigationBarTitleText: '影院热映'
  }

  constructor (props) {
    super(props)
    this.state = {
      current: 0
    }
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }
  
  render () {
    return (
      <View className='movie_wrap'>
        <View className='head'>
          <AtTabBar
              className='check'
              selectedColor={'#000'}
              color={'#496069'}
              tabList={[
                { title: '想看' },
                { title: '已看' }
              ]}
              onClick={this.handleClick.bind(this)}
              current={this.state.current}
            />
          <View className='tips'>
            <View className={`hover ${this.state.current === 0 ?'hover_left' : 'hover_right'}`}></View>
          </View>
        </View>
        
        { 
          this.state.current === 0 
          ? 
          <MovieListUI data={this.state.current}/> 
          : 
          <MovieListUI data={this.state.current}/>
        }    
      </View>

    )
  }
}