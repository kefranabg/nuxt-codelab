<template>
  <div>
    <h1>{{serie.name}}</h1>
    <h3 v-html="serie.summary"></h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  fetch({ store }) {
    return store.dispatch('series/fetchSeries')
  },
  computed: {
    ...mapGetters('series', ['getSerieById']),
    serie() {
      return this.getSerieById(Number(this.$route.params.id))
    }
  } 
}
</script>

<style>

</style>
