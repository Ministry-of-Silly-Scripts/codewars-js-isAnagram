const isAnagram = (word1, word2) => {
  return lowerCaseAndSort(word1) === lowerCaseAndSort(word2)
};

const lowerCaseAndSort = (word) => {
  return word.toLowerCase().split('').sort().join('')
}

module.exports = {
  lowerCaseAndSort,
  isAnagram,
};
