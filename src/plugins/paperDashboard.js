import SideBar from '@/components/SidebarPlugin'
import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
import 'es6-promise'

// css assets
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/sass/paper-dashboard.scss'
import '@/assets/css/themify-icons.css'

export default {
  install (Vue) {
    Vue.use(GlobalComponents)
    Vue.use(GlobalDirectives)
    Vue.use(SideBar)
  }
}
