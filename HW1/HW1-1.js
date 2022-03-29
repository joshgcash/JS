// JavaScript
// HW1-1.js
// transform
const nums = [4,9,5,3,8,6]
const sortedSquaredNums = transform(nums).sort(function(a, b){return a - b})
function transform(nums) {
  //return as squared
  return nums.map(function (x) {
    return Math.pow(x, 2)
  })
  
}
console.log(sortedSquaredNums)
