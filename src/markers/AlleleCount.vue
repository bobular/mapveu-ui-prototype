<template>
  <span class="marker allele-count">
  I'm an allele count marker geo={{ data.val }} count={{ data.alleleCount }}
  </span>
</template>

<script>
export default {
  name: 'AlleleCount',
  props: ['data']
}
</script>

<style>
</style>
