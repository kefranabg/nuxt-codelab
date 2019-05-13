<template>
  <div>
    <h1>Series</h1>
    <div v-for="serie in series" :key="serie.id">
      {{serie.name}}
    </div>
  </div>
</template>

<script>
import { getSeries } from '@/services/api.service'
export default {
  async asyncData() {
    console.log('asyncData')
    const series = await getSeries('bad')
    return { series }
  }
}
</script>

<style>

</style>
