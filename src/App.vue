<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <search-componenet />
  <div class="row">
<result-picture-componenet />
  </div>
</template>

<script>
import SearchComponenet from './components/SearchComponenet.vue'
import ResultPictureComponenet from './components/ResultPicture.vue'

export default {
  name: 'App',
  components: {
    SearchComponenet,
    ResultPictureComponenet
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-color: #121212;
}
</style>
