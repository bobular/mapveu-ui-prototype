<template>
  <div class="panel info-table">
    <h3>{{ currentView.recordLabelSingular }} details</h3>
    <div class="scroll-bar">
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'InfoTable',

  computed: {

    ...mapGetters([ 'currentView' ]),
    
    records() {
      return this.$store.getters['panels/InfoTable/records']
    }
  },

  created: function () { this.$store.dispatch('panels/InfoTable/getRecords') },

  watch: {
    // reload data if changing views
    'currentView': function () { this.$store.dispatch('panels/InfoTable/getRecords') }
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
