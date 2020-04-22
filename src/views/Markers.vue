<template>
  <div class="markers">
    <h2>Markers</h2>
  This is supposed to simulate the main map. We will add a button to "pan/zoom" the map.
  <br />
  <span v-if="currentMarker">It will need to render items below in specialised components, e.g. for {{ currentMarker.className }}</span>

  <ul v-if="markerData">
    <li v-for="geoBucket in markerData.geo.buckets" :key="geoBucket.val">
      {{ geoBucket.val }} : {{ geoBucket.count }}
    </li>
  </ul>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Markers',
  components: {
  },
  computed: {
    ...mapGetters([ 'currentMarker', 'markerData' ])
  },
  created: function () { this.$store.dispatch('getMarkerData') },
  watch: {
    'currentMarker': function () { this.$store.dispatch('getMarkerData') },
    'currentView': function () { this.$store.dispatch('getMarkerData') }
  }
}
</script>

<style>
div.markers {
  background-color: beige;
  
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
}
</style>
