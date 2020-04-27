<template>
  <span class="marker record-count" v-on:click="setClickedMarkerFilter(data)">
  I am a simple marker geo={{ data.val }} count={{ data.count }}
  </span>
</template>

<script>


export default {
  name: 'RecordCount',

  props: ['data'],

  methods: {
    setClickedMarkerFilter(data) {
      const fq = "geohash_1:"+data.val
      this.$store.commit('setClickedMarkerFilter', fq)
    } 
  }


}
</script>

<style scoped>
</style>
