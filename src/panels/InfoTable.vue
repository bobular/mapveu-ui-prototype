<template>
  <div class="panel info-table">
    <h3>{{ currentView.singularRecordType }} details</h3>
    results here
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'InfoTable',
  computed: {
    ...mapGetters([ 'currentView' ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
