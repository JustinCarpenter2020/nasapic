<template>
<div class="col-6">
  <p>
    {{state.picture.explanation}}
  </p>
</div>
  <div class="ResultPictureComponenet col-6 text-center">
<h4>Picture of the day</h4>
<img :src="`${state.picture.url}`" alt="">
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
</style>
