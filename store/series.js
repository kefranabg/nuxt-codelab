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
  async fetchSeries({ commit }) {
    const series = await getSeries('bad')
    commit('setList', series)
  }
}