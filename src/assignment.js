// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */

function sumOfNumbers(arrayOfNumbers) {
  let sum = 0
  let i
  for(i=0; i<arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i]
  }
    return sum;
}

console.log(sumOfNumbers([10, 20, 30]))


/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */
function countEvenNumbers(arrayOfNumbers) {
  let count = 0;
  let i
  for(i=0; i<arrayOfNumbers.length; i++) {
    if(arrayOfNumbers[i] % 2 === 0) {
      count += 1
    }  }
    return count;
}

console.log(countEvenNumbers([1,2,3,4,5,6]))

/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(arrayOfNumbers) {
  let fahArr = []
  let i;
  let conv = 0
  for(i=0; i< arrayOfNumbers.length; i++){
    conv = (arrayOfNumbers[i] * 1.8) + 32
    fahArr.push(Math.trunc(conv))
  }
    return fahArr;
}

console.log(celsiusToFahrenheit([100, 12, 34, 35]))



// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

