<template>
  <div class="select-panel">
    <v-select :value="currentPanel" :options="availablePanels" @input="switchPanel" :components="{Deselect}"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SelectPanel',
  data:	() => ({ Deselect: { render: () => null } }),
  computed: {
    ...mapGetters([ 'availablePanels', 'currentPanel' ])
  },
  methods: {
    switchPanel: function(panel) {
      const viewClass = this.$store.state.currentView.className // null check needed on currentView?
      const markerClass = this.$store.state.currentMarker.className // ditto
      this.$router.push({ path: '/view/'+viewClass+'/panel/'+panel.className+'/marker/'+markerClass }).catch(err => console.log(err))
    }
  },
  watch: {
    '$route': function(to) {
      this.$store.commit('setCurrentPanelByClassName', to.params.panel)
    }
  },
  created: function() {
    this.$store.commit('setCurrentPanelByClassName', this.$route.params.panel)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
