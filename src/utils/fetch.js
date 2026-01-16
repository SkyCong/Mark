import Taro from '@tarojs/taro'

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
    header
  }).then((res) => {
    return res
  }).catch((error) => {
    console.error('Request error:', error)
    throw error
  })
}