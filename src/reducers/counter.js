import { LIKE } from '../constants/counter'

const INITIAL_STATE = {
  likeState: []
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LIKE:
      return {
        ...state,
        likeState: [
          ...state.likeState
        ]
      }
     default:
       return state
  }
}
