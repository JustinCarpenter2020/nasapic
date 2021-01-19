<template>
  <div class='SearchComponent'>
    <form @submit.prevent="searchApod()">
<input v-model="state.query" id="datefield" type="date" min='1971-01-01' max='2021-01-19'>
<button type="submit" class="btn-btn-outline btn-success">Search</button>
  </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { pictureService } from '../services/PictureService'
export default {
  name: 'SearchComponent',
  props: {
    pictureData: Object
  },
  setup (props) {
    const state = reactive({
      query: ''
    })
    return {
      state,
      searchApod () {
        console.log(state.query)
        pictureService.searchApod(state.query)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
