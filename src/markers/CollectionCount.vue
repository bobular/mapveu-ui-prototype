<template>
  <span class="marker collection-count" v-on:click="setClickedMarkerFilter(data)">
  I am a collection count marker geo={{ data.val }} count={{ data.collectionCount }}
  </span>
</template>

<script>
export default {
  name: 'CollectionCount',
  props: ['data'],
  methods: {
    setClickedMarkerFilter(data) { // this could be a mixin shared by all point markers?
      const fq = "geohash_1:"+data.val
      this.$store.commit('setClickedMarkerFilter', fq)
    } 
  }
}
</script>

<style scoped>
li span {
  color: green;
}
</style>
