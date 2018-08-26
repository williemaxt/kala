import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Convert from '@/components/Weight'
import Distance from '@/components/Distance'
import Volume from '@/components/Volume'
import Developer from '@/components/Developer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/weight',
      name: 'Weight',
      component: Convert
    },
    {
      path: '/distance',
      name: 'Distance',
      component: Distance
    },
    {
      path: '/volume',
      name: 'Volume',
      component: Volume
    },
    {
      path: '/developer',
      name: 'Developer',
      component: Developer
    }
  ]
})
