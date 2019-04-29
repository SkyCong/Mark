import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import http from '../../../utils/fetch'

import './class.scss'

export default class Class extends Taro.Component {
  config = {
    navigationBarTitleText: '分类'
  }

  constructor (props) {
    super(props)
    this.state = {
      navData : []
    }
  }

  componentWillMount () {
    this.fetchData()
  }

  async fetchData(){
    let that = this
    await http({
      url: 'http://api.markapp.cn/v160/singles/groupcat',
      method : 'GET'
    })
    .then(result => {
      that.modifyData(result.data.data)
    })
  }
  /**
   * 调整数据
   */
  modifyData(res) {
    for (let item of res) {
      if (item.cat.length < 6) {
        for (let i = 0, length = (6 - item.cat.length); i < length; i++) {
          item.cat.push(" ");
        }
      } else if ((item.cat.length - 6) % 4 !== 0) {
        for (let i = 0, length = (4 - (item.cat.length - 6) % 4); i < length; i++) {
          item.cat.push(" ");
        }
      }
    }
    this.setState({
      navData : res
    })
  }
  
  render () {
    // console.log(this.state.navData)
    return (
      <View className='class_wrap'>
        {
          this.state.navData.map(value => {
            return (
              <View key={value.name} className="navList">
                <View className='navListFrist'>
                  <image src={value.img_url} alt={value.name} mode='widthFix' />
                  <text>{value.name}</text>
                </View>
                {
                  value.cat.map(values => {
                    return (
                      <View key={values.id} className='navListItem'onClick={ () => {
                        Taro.navigateTo({
                          url: '/pages/display/class_display/classDisplay'
                        })
                      }}> 
                        {values.name}
                      </View>         
                    )
                  })
                }
              </View>
            )
          })
        }
      </View>
    )
  }
}

