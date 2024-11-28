/**
 * Bar Cohen and Avidan Salumi
 * The code checks the divisibility of a number by 2, 3, and 5 and returns different values based on the conditions:
 * - If the number is divisible by 2, 3, or 5, it returns 1.
 * - If the number is divisible by 2 and 3, or by 3 and 5, or by 2 and 5, it returns 2.
 * - If the number is divisible by 2, 3, and 5, it returns 3.
 * @param {number} num - The number to check for divisibility.
 * @returns {number} - The result based on the divisibility conditions.
 */

const num = 30;

const numberDiv2 = num % 2 === 0;
const numberDiv3 = num % 3 === 0;
const numberDiv5 = num % 5 === 0;

const res = (numberDiv2 && numberDiv3 && numberDiv5) * 3 || 
            ((numberDiv2 && numberDiv3) || (numberDiv3 && numberDiv5) || (numberDiv2 && numberDiv5)) * 2 || 
            (numberDiv2 || numberDiv3 || numberDiv5) * 1;

console.log(res); 
