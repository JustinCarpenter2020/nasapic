<template>
<div class="col-6">
  <div class="card info">
    <div class="card-body">
      <h4 class="card-title"><u class="underline">{{state.picture.title}}</u></h4>
      <p class="card-text">{{state.picture.explanation}}</p>
    </div>
  </div>
</div>
  <div class="ResultPictureComponenet col-6 text-center">
<h3 class="text-light">Picture of the day</h3>
<img class="img" :src="`${state.picture.url}`" alt="">
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
// import SearchComponent from './SearchComponent'
export default {
  name: 'ActivePicture',
  setup () {
    const state = reactive({
      picture: computed(() => AppState.picture)
    })
    return { state }
  },
  components: {}
}
</script>

<style scoped>

.info{
  border-radius: 8%;
  margin-left: 50px;
  align-content: center;
  margin-top: 50px;
}

.underline{
  color: #FF4F00;
}

.img{
  margin-top: 18px;
  max-width: 800px;
  max-height: 800px;
  border-radius: 5%;
}

</style>
