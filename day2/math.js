/**
 * Demonstrates various Math functions in JavaScript.
 * 
 * - Logs the value of PI.
 * - Rounds PI to the nearest whole number.
 * - Rounds 9.81 to the nearest whole number.
 * - Floors PI (rounds down).
 * - Ceils PI (rounds up).
 * - Displays the minimum number from a set of numbers.
 * - Displays the maximum number from a set of numbers.
 * - Displays a random number between 0 and 0.99.
 * - Generates and logs a random number between 0 and 10.
 * - Logs the absolute value of -10.
 * - Logs the square root of 100.
 * - Logs the value of Euler's number (e).
 * - Logs the natural logarithm of 2.
 * - Logs the sine of 60 degrees.
 * - Logs the cosine of 60 degrees.
 * - Compares the length of two strings and logs the result.
 */
//using math function
const PI = Math.PI
console.log(PI)
console.log(Math.round(PI))
console.log(Math.round(9.81)) //round to nearrest whole number
console.log(Math.floor(PI)) //rounds down
console.log(Math.ceil(PI)) //round up
console.log(Math.min(-5, 3, 20, 4, 5)) //dispalys the minimum number
console.log(Math.max(-5, 3, 20, 4, 5)) //displays the maximum numberf
console.log(Math.random()) //displays a random number btw 0 an 0.99

//using the Math.random object i'll make a code which give a random number from 0 to ten
console.log(Math.floor(Math.random() * 11))
console.log(Math.abs(-10)) // gives the absolute value of a number
console.log(Math.sqrt(100)) // returns the square root of 100
console.log(Math.E) // returns exponential value
console.log(Math.log(2)) // returns the natural logarithmic value of 2
//trigonometry
console.log(Math.sin(60))
console.log(Math.cos(60))
console.log('name'.length == 'gogo'.length)