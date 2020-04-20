<template>
  <div class="panel view-info">
    <h3>This is a placeholder for a specialised panel</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ViewInfo',
  computed: {
    ...mapGetters([ 'currentView' ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
