import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Challenges from '@/components/Challenges'
import Goal from '@/components/Goal'
import Pictures from '@/components/Pictures'
import Comparison from '@/components/Comparison'
import Reviews from '@/components/Reviews'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/challenges',
      name: 'Challenges',
      component: Challenges
    },
    {
      path: '/comparison',
      name: 'Comparison',
      component: Comparison
    },
    {
      path: '/goal',
      name: 'Goal',
      component: Goal
    },
    {
      path: '/pictures',
      name: 'Pictures',
      component: Pictures
    },
    {
      path: '/reviews',
      name: 'Reviews',
      component: Reviews
    }
  ]
})
