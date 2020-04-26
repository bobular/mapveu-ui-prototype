<template>
  <div class="marker-status record-count-status">
  <span v-if="markerData">
    {{ markerData.count }} records shown
  </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'RecordCountStatus',
  computed: {
    ...mapGetters([ 'markerData' ])
  }
}
</script>

<style>
</style>
