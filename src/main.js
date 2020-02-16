import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store.js'
import PaperDashboard from './plugins/paperDashboard'
import Vuelidate from 'vuelidate'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import repository from './api/repository'
import vueFilterPrettyBytes from 'vue-filter-pretty-bytes'
import ToggleButton from 'vue-js-toggle-button'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import VueParticles from 'vue-particles'

Vue.use(VueParticles)
Vue.use(VueSweetalert2)
Vue.use(PaperDashboard)
Vue.use(Vuelidate)
Vue.use(vueFilterPrettyBytes)
Vue.use(ToggleButton)

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

const token = localStorage.getItem('token')
if (token) {
  repository.defaults.headers.common.Authorization = token
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
