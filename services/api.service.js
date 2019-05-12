import axios from 'axios'

export const getSeries = async (query) => {
  const { data } = await axios.get(`http://api.tvmaze.com/search/shows?q=${query}`)
  const series = data.map(item => item.show)
  return series
}