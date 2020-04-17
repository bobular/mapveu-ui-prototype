<template>
  <div class="panels">
    <h2>Panels</h2>
    <select-panel></select-panel>
    <component v-bind:is="currentPanel ? currentPanel.className : 'NoPanel'"></component>
  </div>
</template>

<script>
// @ is an alias to /src
import SelectPanel from '@/components/SelectPanel.vue'
import { mapGetters } from 'vuex'

import NoPanel from '@/panels/NoPanel.vue'
import ViewInfo from '@/panels/ViewInfo.vue'
import InfoTable from '@/panels/InfoTable.vue'

export default {
  name: 'Panels',
  computed: {
    ...mapGetters([ 'currentPanel' ])
  },
  components: {
    SelectPanel,
    NoPanel,
    ViewInfo,
    InfoTable
  }
}
</script>

<style>

div.panels {
  background-color: pink;
  
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 2;
  grid-row-end: 4;
}

</style>
