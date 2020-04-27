<template>
  <div v-if="markerData" class="marker-status allele-count-status">
    {{ markerData.alleleCount }} alleles shown
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AlleleCountStatus',
  computed: {
    ...mapGetters([ 'markerData' ])
  }
}
</script>

<style>
</style>
