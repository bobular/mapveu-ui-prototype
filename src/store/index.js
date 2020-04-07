import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import config from '../config'


export default new Vuex.Store({
  strict: true, // FOR DEVELOPMENT ONLY (CPU drain)
                // possibly use this: process.env.NODE_ENV !== 'production'

  state: { config,
           currentView: null,
	   currentPanel: null
         },
  getters: {
    currentView: state => {
      return state.currentView
    },
    availableViews: state => {
      return state.config.views
    },

    currentPanel: state => {
      return state.currentPanel
    },
    availablePanels: state => {
      return state.currentView ? state.currentView.panels : []
    }
  },
  mutations: {
    setCurrentViewById (state, id) {
      state.currentView = state.config.views.find(view => view.id === id)
    },
    setCurrentPanelById (state, id) {
      if (state.currentView) {
	state.currentPanel =
	  id === 'default' ?
            state.currentView.panels[0] :
	    state.currentView.panels.find(panel => panel.id === id)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
