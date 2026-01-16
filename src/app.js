import { createApp } from 'vue'
import store from './store'
import './app.scss'

const App = createApp({
  onLaunch(options) {
    console.log('App Launch', options)
  },
  onShow(options) {
    console.log('App Show', options)
  },
  onHide() {
    console.log('App Hide')
  },
  onError(msg) {
    console.log('App Error', msg)
  }
})

App.use(store)

export default App
