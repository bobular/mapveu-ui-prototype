<template>
  <div class="select-marker">
    <h2>Select marker</h2>
    <v-select :value="currentMarker" :options="availableMarkers" @input="switchMarker" :components="{Deselect}"/>
    <!-- marker-specific config panel below -->
    <component v-bind:is="currentMarker ? currentMarker.className+'Config' : 'NoMarkerConfig'"></component>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import NoMarkerConfig from '@/markers/NoMarkerConfig.vue'

import siteMarkers from '@/config/markers'

export default {
  name: 'SelectMarker',
  data:	() => ({
  	         Deselect: { render: () => null },
		 placeholderText: "Choose a marker type..."
  	      }),
  components: {
    NoMarkerConfig,
    ...siteMarkers
  },
  computed: {
    ...mapGetters([ 'availableMarkers', 'currentMarker' ])
  },
  methods: {
    switchMarker: function(marker) {
      const viewClass = this.$store.state.currentView.className
      const panelClass = this.$store.state.currentPanel.className
      const markerClass = marker.className
      this.$router.push({ path: '/view/'+viewClass+'/panel/'+panelClass+'/marker/'+markerClass }).catch(err => console.log(err))
    }
  },
  watch: {
    '$route': function(to) {
      this.$store.commit('setCurrentMarkerByClassName', to.params.marker)
    }
  },
  created: function() {
    this.$store.commit('setCurrentMarkerByClassName', this.$route.params.marker)
  }
  
}
</script>


<style>
div.select-marker {
  background-color: lavender;
  
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: span 2;
}
</style>

