<template>
<nav class="navbar navbar-light">
</nav>
<div class="row">
  <search-componenet />
</div>
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
  background-image: url('https://image.freepik.com/free-vector/space-stars-background_160081-158.jpg');
}

.navbar{
  position: absolute;
  top: 0%;
  width: 100%;
  height: 80px;
  background-color: #121212;
}

html, body {
    max-width: 100%;
    overflow-x: hidden;
}
</style>
