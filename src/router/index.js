import Vue from 'vue'
import VueRouter from 'vue-router'
import SelectView from '../views/SelectView.vue'
import Panels from '../views/Panels.vue'
import Search from '../views/Search.vue'
import SelectMarker from '../views/SelectMarker.vue'
import Markers from '../views/Markers.vue'
import Legend from '../views/Legend.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/view/default/panel/default'
  },
  {
    path: '/view/:view/panel/:panel',
    name: 'View',
    components: {
      SelectView,
      Panels,
      Search,
      SelectMarker,
      Markers,
      Legend
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
