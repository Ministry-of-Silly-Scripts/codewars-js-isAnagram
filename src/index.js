const isAnagram = (word1, word2) => {
  sorted_word1 = word1.split('').sort().join('')
  sorted_word2 = word2.split('').sort().join('')

  if (sorted_word1 === sorted_word2) {
    return true;
  }

  return false;
};

module.exports = {
  isAnagram,
};
