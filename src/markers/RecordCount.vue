<template>
  <span class="marker record-count">
  I'm a simple marker geo={{ data.val }} count={{ data.count }}
  </span>
</template>

<script>
export default {
  name: 'RecordCount',
  props: ['data']
}
</script>

<style scoped>
</style>
