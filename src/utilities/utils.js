const generateRandomNumber = function (min, max, count) {
  const uniqueNumbers = new Set()

  while (uniqueNumbers.size < count) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    uniqueNumbers.add(randomNumber)
  }
  return Array.from(uniqueNumbers)
}

const shuffleArray = function (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export { generateRandomNumber, shuffleArray }
