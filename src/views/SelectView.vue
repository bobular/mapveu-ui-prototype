<template>
  <div class="select-view">
    <v-select :value="currentView" :options="availableViews" @input="switchView" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'SelectView',
  components: {
  },
  computed: {
    ...mapGetters([ 'availableViews', 'currentView' ])
  },
  methods: {
    switchView: function(view) {
      this.$router.push({ path: '/view/'+view.id }).catch(err => console.log(err))
    }
  },
  watch: {
    '$route': function(to, from) {
      if (to) {
        console.log('to', to)
        this.$store.commit('setCurrentViewById', to.params.view)
      } else { console.log('no to') }
      if (from) { console.log('from', from) } else { console.log('no from') }
    }
  },
  created: function() {
    this.$store.commit('setCurrentViewById', this.$route.params.view)
  }
}
</script>

<style>
div.select-view {
  background-color: lightyellow;
  
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 1;
}
</style>