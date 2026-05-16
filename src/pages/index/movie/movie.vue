<template>
  <home-movie />
</template>

<script>
import { defineComponent } from 'vue'
import HomeMovie from '../../../components/HomeMovie.vue'

export default defineComponent({
  name: 'MoviePage',
  components: {
    HomeMovie
  }
})
</script>

<style lang="scss">
@import '../../../components/HomeMovie.scss';
@import '../../../components/HomeMovieListUI.scss';
</style>
