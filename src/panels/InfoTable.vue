<template>
  <div class="panel info-table">
    <h3>{{ currentView.recordLabelSingular }} details</h3>
    results here
    <ol>
      <li v-for="record in records" :key="record.id">
        {{ record.id }} : {{ record.label }}
      </li>
    </ol>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'InfoTable',
  computed: {
    ...mapGetters([ 'currentView', 'records' ])
  },
  created: function () { this.$store.dispatch('getRecords') }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
