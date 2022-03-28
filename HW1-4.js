// Javascript
// HW1-4.js
// isPalindrome
function Palindrome(string) {
  var string = string.replace(/[^a-zA-Z0-9]+/gi, '').toLowerCase()
  return string == [...string].reverse().join("")
  
}

const string = "Mom"
const isPalindrome = Palindrome(string)

console.log(isPalindrome)
