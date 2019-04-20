import Taro from '@tarojs/taro'

// const URL = 'http://api.markapp.cn/'
// const URL = 'http://api.markapp.cn/'

export default ({
  url = '',
  method = 'GET',
  data = {} 
}) => {
  return Taro.request({
    url,
    method,
    data,
    success: (res) => {
      return {
        data: res.data,
        header: res.header
      }
    },
    fail: (error) => {
      return error
    }
  })
}