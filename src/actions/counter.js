import {
  LIKE,
  BASICINFO
} from '../constants/counter'

export const like = () => {
  return {
    type: LIKE
  }
}

export const setBasicInfo  = (param) => {
  console.log('222',param)
  return {
      type: BASICINFO,
      payload: param
  }
}
