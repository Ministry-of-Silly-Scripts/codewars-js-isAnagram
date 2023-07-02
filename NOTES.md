# Notes

## Description 

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return `true` if the two arguments given are anagrams of each other; return `false` otherwise.

**Examples**

- `"foefet"`  is an anagram of `"toffee"`

- `"Buckethead"` is an anagram of `"DeathCubeK"`

## Domain description:

- input: two words (strings)
- output: an indication if the two words are an anagram or not (boolean: true / false)
- rules:
    - anagram: rearranging of the letters of word to produce a new word 
    - inputs are case insensitive
    - number of letters of both words must be the same

---

**Label**  
✅ done 🚧 WIP ❌ ERROR 🐛 BUG 

---

TODO:

# Pomodoro 1 🍅:
initial setup
    - update README ✅
    - update NOTES ✅ 
    - update package.json ✅
    - update code/test files ✅
domain discussion ✅
perform the 'canary' test just to check if the structure works ✅
it should return false for inputs 'a' and 'b' ✅

# Pomodoro 2 🍅:
it should return true for inputs 'a' and 'a' ✅
it should return false for inputs 'ab' and 'ac' ✅
it should return true for inputs 'ab' and 'ba' ✅
it should return true for inputs 'Buckethead' and 'DeathCubeK' ✅
refactor ✅
test new function lowerCaseAndSort:
    - it should return 'abcdeehktu' for input 'Buckethead' ✅