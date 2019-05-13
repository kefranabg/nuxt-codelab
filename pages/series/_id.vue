<template>
  <div>
    <h1>{{serie.name}}</h1>
    <h3 v-html="serie.summary"></h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
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
