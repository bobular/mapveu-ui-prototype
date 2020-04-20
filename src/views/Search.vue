<template>
  <div class="search">
    <h2>Search box</h2>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Search',
  components: {
  }
}
</script>


<style>
div.search {
  background-color: plum;
  
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: span 1;
}
</style>

