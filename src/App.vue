<template>
  <div id="app">
    <div class="container">
      <router-view name="SelectView"/>
      <router-view name="Panels"/>
      <router-view name="Search"/>
      <router-view name="Markers"/>
      <router-view name="SelectMarker"/>
      <router-view name="Legend"/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  display: grid;
  grid-template-columns: 30% 50% 20%;
  grid-template-rows: 75px 225px 400px;
  background-color: gray50;
}

h2 {
  margin-top: 2px;
  margin-bottom: 2px;
}

</style>
