<template>
  <div class="markers">
    <h2>Markers</h2>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Markers',
  components: {
  }
}
</script>

<style>
div.markers {
  background-color: beige;
  
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 4;
}
</style>