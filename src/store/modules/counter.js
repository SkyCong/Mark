import { LIKE, BASICINFO } from '../../constants/counter'

const state = {
  likeState: [],
  id: [],
  basicinfo: {}
}

const mutations = {
  [LIKE] (state) {
    // like mutation
  },
  [BASICINFO] (state, payload) {
    state.basicinfo = payload
  },
  SET_LIKE_STATE (state, { likeState, id }) {
    state.likeState = likeState
    state.id = id
  }
}

const actions = {
  like ({ commit }) {
    commit(LIKE)
  },
  setBasicInfo ({ commit }, param) {
    commit(BASICINFO, param)
  }
}

const getters = {
  basicinfo: state => state.basicinfo,
  likeState: state => state.likeState,
  id: state => state.id
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
