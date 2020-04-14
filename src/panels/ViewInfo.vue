<template>
  <div class="panel view-info">
    <h3>Welcome to {{ currentView.label }} view</h3>
    <p>{{ currentView.description }}</p>
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
