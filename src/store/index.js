import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import config from '@/config'
import panelModules from '@/config/store/panels'

import axios from 'axios'

export default new Vuex.Store({
  strict: true, // FOR DEVELOPMENT ONLY (CPU drain)
                // possibly use this: process.env.NODE_ENV !== 'production'

  state: { config,
           currentView: null,
	   currentPanel: null,
	   currentMarker: null,
	   markerData: null,
	   clickedMarkerFilter: null
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

    clickedMarkerFilter: state => {
      return state.clickedMarkerFilter
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
    setMarkerDataFromResponse (state, response) {
      state.markerData = response.data
    },

    // this is Solr-specific just for the prototype
    // the full implementation for creating filters from selected marker(s)
    // or rectangles or polygons needs to be implemented in a back-end
    // agnostic manner and much more sophisticated than this, obviously
    setClickedMarkerFilter (state, fq) {
      state.clickedMarkerFilter = fq
    },
    clearClickedMarkerFilter (state) {
      state.clickedMarkerFilter = null
    }

  },
  actions: {
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
    panels : panelModules
  }
})
