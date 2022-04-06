const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const strToHash = str => {
  let hash = 0
  if (str.length === 0) return hash
  for (let i = 0; i < str.length; i++) {
    const chr = str.charCodeAt(i)
    hash  = ((hash << 5) - hash) + chr
    hash |= 0; // Convert to 32bit integer
  }
  hash += randomIntFromInterval(9999, 999999)
  return Math.abs(hash)
}

export {
  strToHash,
  randomIntFromInterval
}