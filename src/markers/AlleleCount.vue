<template>
  <span class="marker allele-count" v-on:click="setClickedMarkerFilter(data)">
  I am an allele count marker geo={{ data.val }} count={{ data.alleleCount }}
  </span>
</template>

<script>
export default {
  name: 'AlleleCount',
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
  color: red;
}
</style>
