import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

export default class Movie extends Taro.Component {
  constructor (props) {
    super(props)
  }
  componentWillMount () {}
  render () {
    return (
      <View>
        <Button>Template</Button>
      </View>
    )
  }
}