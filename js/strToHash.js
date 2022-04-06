import randomIntFromInterval from './randomIntFromInterval.js'

const strToHash = str => {
  try {
    let hash = 0
    if (str.length === 0) return hash
    for (let i = 0; i < str.length; i++) {
      const chr = str.charCodeAt(i)
      hash = ((hash << 5) - hash) + chr
      hash |= 0; // Convert to 32bit integer
    }
    hash += randomIntFromInterval(9999, 999999)
    return Math.abs(hash)
  } catch (error) {
    console.error(error)
  }
}

export default strToHash