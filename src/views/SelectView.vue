<template>
  <div class="select-view">
    <v-select :value="currentView" :options="availableViews" @input="switchView" :components="{Deselect}" :placeholder="placeholderText"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'SelectView',
  data:	() => ({
  	         Deselect: { render: () => null },
		 placeholderText: "Choose a view..."
  	      }),
  components: {
  },
  computed: {
    ...mapGetters([ 'availableViews', 'currentView' ])
  },
  methods: {
    switchView: function(view) {
      this.$router.push({ path: '/view/'+view.id+'/panel/default' }).catch(err => console.log(err))
    }
  },
  watch: {
    '$route': function(to) {
      this.$store.commit('setCurrentViewById', to.params.view)
    }
  },
  created: function() {
    console.log(this.$route.params)
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