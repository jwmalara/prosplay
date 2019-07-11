import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Detail from './views/Detail.vue'
import Faq from './views/Faq.vue'
import Policy from './views/Policy.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq
    },
    {
      path: '/shop/:putter',
      name: 'detail',
      component: Detail
    },
    {
      path: '/policies/:policy',
      name: 'policy',
      component: Policy
    }
  ]
})
