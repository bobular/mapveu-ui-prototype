<template>
  <div class="select-panel">
    <v-select :value="currentPanel" :options="availablePanels" @input="switchPanel" :components="{Deselect}"/>

    <span>current panel: {{ currentPanel }}</span>
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
      const viewId = this.$route.params.view
      this.$router.push({ path: '/view/'+viewId+'/panel/'+panel.id }).catch(err => console.log(err))
    }
  },
  watch: {
    '$route': function(to) {
      this.$store.commit('setCurrentPanelById', to.params.panel)
    }
  },
  created: function() {
    this.$store.commit('setCurrentPanelById', this.$route.params.panel)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
