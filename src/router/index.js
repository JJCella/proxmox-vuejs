import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import store from '../store'
import Logout from '../components/Logout'
import Dashboard from '../pages/Dashboard'
import DashboardLayout from '../layout/dashboard/DashboardLayout'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/dashboard',
      component: DashboardLayout,
      meta: {
        requiresAuth: false
      },
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: Dashboard
        }]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
