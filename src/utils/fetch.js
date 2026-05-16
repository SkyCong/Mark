import Taro from '@tarojs/taro'
import { getMockResponse } from '../mock/movieData'

export default ({
  url = '',
  method = 'GET',
  data = {},
  header = {}
}) => {
  const mockResponse = getMockResponse({ url, data })

  if (mockResponse) {
    return Promise.resolve(mockResponse)
  }

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
