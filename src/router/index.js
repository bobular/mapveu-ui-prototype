import Vue from 'vue'
import VueRouter from 'vue-router'
import SelectView from '../views/SelectView.vue'
import Panels from '../views/Panels.vue'
import Markers from '../views/Markers.vue'
import Legend from '../views/Legend.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      SelectView,
      Panels,
      Markers,
      Legend
    }
  },
   {
    path: '/view/:view',
    name: 'View',
    components: {
      SelectView,
      Panels,
      Markers,
      Legend
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
