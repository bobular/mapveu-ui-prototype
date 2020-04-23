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
	   currentMarker: null,
	   markerData: null,
	   records: [] // TO DO: move to InfoTable module
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
    currentMarker: state => {
      return state.currentMarker
    },
    availableMarkers: state => {
      return state.currentView ? state.currentView.markers : []      
    },
    markerData: state => {
      return state.markerData
    },
    // records should be in an InfoTable module
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
    setCurrentMarkerByClassName (state, className) {
      if (state.currentView) {
	state.currentMarker =
	  className === 'default' ?
            state.currentView.markers[0] :
	    state.currentView.markers.find(marker => marker.className === className)
      }
    },
    setRecordsFromResponse (state, response) {
      state.records = response.data
    },
    setMarkerDataFromResponse (state, response) {
      state.markerData = response.data
    }

  },
  actions: {
    async getRecords (context) { // may need to go in InfoTable module
      const currentView = context.getters.currentView
      const currentPanel = context.getters.currentPanel
      if (currentView && currentPanel) {
	const viewClass = currentView.className
	const panelClass = currentPanel.className
	context.commit('setRecordsFromResponse',
		       await axios.get('/api/view/'+viewClass+'/panel/'+panelClass+'/records',
				       {
					 params: {
                                           fields: // [ 'id', 'label'
					     currentView.fields.
					       filter(field => field.displayField).
					       map(field => field.displayField)
//					   ]
					 }
                                       }))
      }
    },
    async getMarkerData (context) {
      const currentView = context.getters.currentView
      const currentMarker = context.getters.currentMarker
      if (currentView && currentMarker) {
	const viewClass = currentView.className
	const markerClass = currentMarker.className
	context.commit('setMarkerDataFromResponse',
		       await axios.get('/api/view/'+viewClass+'/marker/'+markerClass+'/markerData',
				       {
					 params: {
					   q: '*:*',
                                           geoField: 'geohash_1',
					   catField: 'species_category'
					 }
                                       }))
      }

    }
  },
  modules: {
  }
})
