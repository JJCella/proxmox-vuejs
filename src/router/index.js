import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import store from '../store'
import Logout from '../components/Logout'
import Dashboard from '../pages/Dashboard'
import DashboardLayout from '../layout/dashboard/DashboardLayout'
import UserProfile from '../pages/UserProfile'
import Instances from '../pages/Instances'
import Notifications from '../pages/Notifications'
import Instance from '../pages/Instance'
import Access from '../pages/Instance/Access'
import Power from '../pages/Instance/Power'
import Networking from '../pages/Instance/Networking'
import Destroy from '../pages/Instance/Destroy'
import NewInstance from '../pages/NewInstance'
import noVNC from '../pages/Instance/noVNC'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/dashboard',
      component: DashboardLayout,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: 'instance/:id',
          name: 'instance',
          redirect: 'instance/:id/access',
          component: Instance,
          children: [
            {
              path: 'access',
              name: 'access',
              component: Access
            },
            {
              path: 'power',
              name: 'power',
              component: Power
            },
            {
              path: 'networking',
              name: 'networking',
              component: Networking
            },
            {
              path: 'destroy',
              name: 'destroy',
              component: Destroy
            },
            {
              path: 'noVNC',
              name: 'noVNC',
              component: noVNC
            }
          ]
        },
        {
          path: 'stats',
          name: 'stats',
          component: UserProfile
        },
        {
          path: 'notifications',
          name: 'notifications',
          component: Notifications
        },
        {
          path: 'new',
          name: 'new',
          component: NewInstance
        },
        {
          path: 'instances',
          name: 'instances',
          component: Instances
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
