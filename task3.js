/**
 * Bar Cohen and Avidan Salumi
 * Iterates over an array and counts the number of zeros.
 * The function checks each element in the array and increments the count if the element is zero.
 * @param {*} elem - The current element in the array being processed.
 * @returns {void} - The function doesn't return anything; it modifies the count variable.
 */

const arr = [10, 50, 40,0,0,0, 3000, 40];
let count = 0;

arr.forEach(function(elem) {
  elem === 0?count+=1:count=count
});

console.log(count);

