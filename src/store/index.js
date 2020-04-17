import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import config from '../config'

import axios from 'axios'

export default new Vuex.Store({
  strict: true, // FOR DEVELOPMENT ONLY (CPU drain)
                // possibly use this: process.env.NODE_ENV !== 'production'

  state: { config,
           currentView: null,
	   currentPanel: null,
	   records: []
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
    },
    records: state => {
      return state.records
    }
  },
  mutations: {
    setCurrentViewByClassName (state, className) {
      state.currentView =
	className === 'default' ?
	state.config.views[0] :
	state.config.views.find(view => view.className === className)
    },
    setCurrentPanelByClassName (state, className) {
      if (state.currentView) {
	state.currentPanel =
	  className === 'default' ?
            state.currentView.panels[0] :
	    state.currentView.panels.find(panel => panel.className === className)
      }
    },
    setRecordsFromResponse (state, response) {
      state.records = response.data
    }
  },
  actions: {
    async getRecords (context) {
      const viewClass = context.getters.currentView.className
      const panelClass = context.getters.currentPanel.className
      context.commit('setRecordsFromResponse',
		     await axios.get('/api/view/'+viewClass+'/panel/'+panelClass+'/records',
				     {
                                       params: {
                                         fields: [ 'id', 'label' ]
                                       }
                                     }))
    }
  },
  modules: {
  }
})
