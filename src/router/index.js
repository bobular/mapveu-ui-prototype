import Vue from 'vue'
import VueRouter from 'vue-router'
import SelectView from '../views/SelectView.vue'
import Panels from '../views/Panels.vue'
import Search from '../views/Search.vue'
import SelectMarker from '../views/SelectMarker.vue'
import Markers from '../views/Markers.vue'
import Legend from '../views/Legend.vue'

import config from '@/config'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: function() {
      return {
	name: 'main',
        params: {
	  view: config.views[0].className,
	  panel: config.views[0].panels[0].className,
	  marker: config.views[0].markers[0].className
	}
      }
    }
  },
  {
    path: '/view/:view/panel/:panel/marker/:marker',
    name: 'main',
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
