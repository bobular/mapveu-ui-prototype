<template>
  <div class="select-marker">
    <h2>Select marker</h2>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'SelectMarker',
  components: {
  }
}
</script>


<style>
div.select-marker {
  background-color: lavender;
  
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: span 2;
}
</style>

