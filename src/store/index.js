import { createStore } from 'vuex'
import counter from './modules/counter'

const store = createStore({
  modules: {
    counter
  },
  strict: process.env.NODE_ENV !== 'production'
})

export default store
