<template>
  <div class="select-view">
  <h2>View</h2>
  <v-select :value="currentView" :options="availableViews" @input="switchView" :components="{Deselect}" :placeholder="placeholderText"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'SelectView',
  data:	() => ({
  	         Deselect: { render: () => null },
		 placeholderText: "Choose a view..."
  	      }),
  components: {
  },
  computed: {
    ...mapGetters([ 'availableViews', 'currentView' ])
  },
  methods: {
    switchView: function(view) {
      // panel can stay the same if the view we are switching to also has it
      let currentPanel = this.$store.state.currentPanel
      let newPanelClass = 'default'
      if (currentPanel && view.panels.find(panel => panel.className === currentPanel.className)) {
        newPanelClass = currentPanel.className
      }
      // marker can stay the same if the view still has it
      let currentMarker = this.$store.state.currentMarker
      let newMarkerClass = 'default'
      if (currentMarker && view.markers.find(marker => marker.className === currentMarker.className)) {
        newMarkerClass = currentMarker.className
      }
      
      this.$router.push({ path: '/view/'+view.className+'/panel/'+newPanelClass+'/marker/'+newMarkerClass }).catch(err => console.log(err))
    }
  },
  watch: {
    '$route': function(to) {
      this.$store.commit('setCurrentViewByClassName', to.params.view)
    }
  },
  created: function() {
    this.$store.commit('setCurrentViewByClassName', this.$route.params.view)
  }
}
</script>

<style>
div.select-view {
  background-color: seashell;
  
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 1;
}
</style>
