<template>
  <div class="status">
  <span v-if="clickedMarkerFilter">Clicked marker filter = {{ clickedMarkerFilter }}</span>
  <component v-bind:is="currentMarker ? currentMarker.className+'Status' : 'NoMarkerStatus'"></component>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import NoMarkerStatus from '@/markers/NoMarkerStatus.vue'
import siteMarkers from '@/config/markers'

export default {
  name: 'Status',
  components: {
    NoMarkerStatus,
    ...siteMarkers
  },
  computed: {
    ...mapGetters([ 'currentMarker', 'clickedMarkerFilter' ])
  }  
}
</script>


<style>
div.status {
  background-color: lightgreen;
  
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 5;
}
</style>

