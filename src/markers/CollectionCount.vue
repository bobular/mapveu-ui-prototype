<template>
  <span class="marker collection-count">
  I'm a collection count marker geo={{ data.val }} count={{ data.collectionCount }}
  </span>
</template>

<script>
export default {
  name: 'CollectionCount',
  props: ['data']
}
</script>

<style>
</style>
