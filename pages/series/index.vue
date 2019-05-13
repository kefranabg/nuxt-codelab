<template>
  <div>
    <h1>Series</h1>
    <div v-for="serie in list" :key="serie.id">
      <nuxt-link :to="'series/' + serie.id">{{serie.name}}</nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  fetch({ store }) {
    return store.dispatch('series/fetchSeries')
  },
  computed: mapState('series', ['list'])
}
</script>

<style>

</style>
