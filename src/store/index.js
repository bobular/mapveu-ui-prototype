import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import config from '../config'


export default new Vuex.Store({
  strict: true, // FOR DEVELOPMENT ONLY (CPU drain)
                // possibly use this: process.env.NODE_ENV !== 'production'

  state: { config,
           runtime : {
             currentView: null,
           }
         },
  getters: {
    currentView: state => {
      return state.runtime.currentView
    },
    availableViews: state => {
      return state.config.views
    }
  },
  mutations: {
    setCurrentView (state, payload) {
      state.runtime.currentView = payload
    },
    setCurrentViewById (state, id) {
      state.runtime.currentView = state.config.views.find(view => view.id === id)
    }
    
  },
  actions: {
  },
  modules: {
  }
})
