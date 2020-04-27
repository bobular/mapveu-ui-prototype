<template>
  <div class="panel info-table">
  <h3>{{ currentView.recordLabelSingular }} details</h3>
    <div v-if="clickedMarkerFilter" class="scroll-bar">
      <ol>
        <li v-for="record in records" :key="record.id">
          <ul>
            <li v-for="field in currentView.fields" :key="field.label">
              {{ field.label }} : {{ record[field.displayField] }}
            </li>
          </ul>
        </li>
      </ol>
    </div>  
    <div v-else>
      Click a marker to see some data
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'InfoTable',

  computed: {

    ...mapGetters([ 'currentView', 'clickedMarkerFilter' ]),
    
    records() {
      return this.$store.getters['panels/InfoTable/records']
    }
  },

  created: function () { this.$store.dispatch('panels/InfoTable/getRecords') },

  watch: {
    // reload data if changing views
    'currentView': function () { this.$store.dispatch('panels/InfoTable/getRecords') },
    // or on marker click
    'clickedMarkerFilter': function () { this.$store.dispatch('panels/InfoTable/getRecords') }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div.scroll-bar {
    overflow: scroll;
    height: 500px;
  }

</style>
