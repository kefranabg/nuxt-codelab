import { getSeries } from '@/services/api.service'

export const state = () => ({
  list: null
})

export const mutations = {
  setList(state, newList) {
    state.list = newList
  }
}

export const actions = {
  async fetchSeries({ state, commit }) {
    if (state.series) return ;
    
    const series = await getSeries('bad')
    commit('setList', series)
  }
}

export const getters = {
  getSerieById: (state) => (serieId) => state.list.find(serie => serie.id === serieId)
}