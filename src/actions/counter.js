import {
  LIKE
} from '../constants/counter'

export const like = () => {
  return {
    type: LIKE
  }
}

// // 异步的action
// export function asyncAdd () {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(add())
//     }, 2000)
//   }
// }
