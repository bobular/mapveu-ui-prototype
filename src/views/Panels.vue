<template>
  <div class="panels">
    <h2>Panels</h2>
    <select-panel></select-panel>
</div>
</template>

<script>
// @ is an alias to /src
import SelectPanel from '@/components/SelectPanel.vue'

export default {
  name: 'Panels',
  components: {
    SelectPanel
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
