const isAnagram = (word1, word2) => {
  if (word1 === word2) {
    return true;
  }

  return false;
};

module.exports = {
  isAnagram,
};
