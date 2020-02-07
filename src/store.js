import Vue from 'vue'
import Vuex from 'vuex'
import repository from './api/repository'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || ''
  },
  mutations: {
    auth_request (state) {
      state.status = 'loading'
    },
    auth_success (state, token) {
      state.status = 'success'
      state.token = token
    },
    auth_error (state) {
      state.status = 'error'
    },
    logout (state) {
      state.status = ''
      state.token = ''
    }
  },
  actions: {

    login ({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        // eslint-disable-next-line standard/object-curly-even-spacing
        let form = new FormData()
        form.set('username', user.email)
        form.set('password', user.password)
        repository.post('/token', form)
          .then(resp => {
            const token = resp.data.token
            localStorage.setItem('token', token)
            repository.defaults.headers.common['Authorization'] = token
            commit('auth_success', token)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },

    logout ({commit}) {
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        delete repository.defaults.headers.common['Authorization']
        resolve()
      })
    },

    register ({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        // eslint-disable-next-line standard/object-curly-even-spacing
        repository.post('/register', user)
          .then(resp => {
            const token = resp.data.token
            const user = resp.data.user
            localStorage.setItem('token', token)
            repository.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error', err)
            localStorage.removeItem('token')
            reject(err)
          })
      })
    }

  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  }
})

export default store
