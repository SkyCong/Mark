import { LIKE , BASICINFO } from '../constants/counter'

const INITIAL_STATE = {
  likeState: [],
  id: [],
  basicinfo: []
}

export default function counter (state = INITIAL_STATE, action) {

  
  switch (action.type) {
    case LIKE:
      return {
        ...state,
      }    
    case BASICINFO:
      // console.log('i am here',action)
      return {
          ...state,
          basicinfo: action.payload
      }
  default:
      return state
}
}
