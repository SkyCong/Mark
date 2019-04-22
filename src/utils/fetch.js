import Taro from '@tarojs/taro'

// const URL = 'http://api.markapp.cn/'
// const URL = 'http://api.markapp.cn/'

export default ({
  url = '',
  method = 'GET',
  data = {},
  header = {}
  }) => {
  return Taro.request({
    url,
    method,
    data,
    header,
    success: (res) => {
      return {
        datas: res
      }
    },
    fail: (error) => {
      return error
    }
  })
}