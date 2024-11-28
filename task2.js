/**
* Bar Cohen and Avidan Salumi
 * Checks if a number is prime.
 * A prime number is a natural number greater than 1 that is only divisible by 1 and itself.
 * @param {*} num - The number to check.
 * @returns {boolean} - Returns true if the number is prime, otherwise false.
 */


function isPrime(num) {
  if (num <= 1) return false; 
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) 
      return false;
  }
  return true;
}



for (let i = 2; i < 237; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}