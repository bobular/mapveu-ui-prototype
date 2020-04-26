<template>
  <div class="marker-status collection-count-status">
    {{ markerData.collectionCount }} collections shown
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CollectionCountStatus',
  computed: {
    ...mapGetters([ 'markerData' ])
  }
}
</script>

<style>
</style>
