// Javascript
// HW1-5.js
// convertToVowels
function convertToVowels(string) {
  var string = string.replace(/[bcdfghjklmnpqrstvwxyz]/gi,'')
  return string
}
const string = "The quick brown fox jumps over the lazy dog"
const vowels = convertToVowels(string)

console.log(vowels)
