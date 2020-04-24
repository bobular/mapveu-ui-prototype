import axios from 'axios'

export default {

  namespaced: true,
  
  state: {
    records: []
  },
  
  getters: {
    records: state => {
      return state.records
    }
  },
  
  mutations: {
    setRecordsFromResponse (state, response) {
      state.records = response.data
    }
  },

  actions: {
    async getRecords ({commit, rootGetters}) {
      const currentView = rootGetters.currentView
      const currentPanel = rootGetters.currentPanel
      if (currentView && currentPanel) {
	const viewClass = currentView.className
	const panelClass = currentPanel.className
	commit('setRecordsFromResponse',
	       await axios.get('/api/view/'+viewClass+'/panel/'+panelClass+'/records',
			       {
				 params: {
                                   fields:
				   currentView.fields.
				     filter(field => field.displayField).
				     map(field => field.displayField)
				 }
                               }))
      }
    }
  }


}
