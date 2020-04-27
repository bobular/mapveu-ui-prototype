<template>
  <div v-if="markerData" class="marker-status record-count-status">
    {{ markerData.count }} records shown
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
