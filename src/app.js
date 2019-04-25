import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/display/search/search',
      "pages/display/class/class",
      "pages/display/daycard/daycard",
      "pages/display/hotmovie/hotmovie",
      "pages/display/class_display/classDisplay",
    ],
    window: {
      navigationBarTitleText: '发现',
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#496069'
    }
  }

  // componentDidMount () {}

  // componentDidShow () {}

  // componentDidHide () {}

  // componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
