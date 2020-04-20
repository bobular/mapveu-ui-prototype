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
import sitePanels from '@/config/panels'
import { mapGetters } from 'vuex'

import NoPanel from '@/panels/NoPanel.vue'

export default {
  name: 'Panels',
  computed: {
    ...mapGetters([ 'currentPanel' ])
  },
  components: {
    SelectPanel,
    NoPanel,
    ...sitePanels
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
