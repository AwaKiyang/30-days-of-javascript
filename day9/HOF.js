//****Higher order function are functions which tale other other functions as paramter or return a function as a value. the function passed as a parameter is called callback
// a callback is a funtion which can be passed as parameter to other funtion. see the example
const callback = (n) =>{
    return n ** 2
}
//
function cube(callback, n){
    return callback(n) * n
}
    console.log(cube(callback, 3))

//returning function returns a function as a value 
const higherOrder = n =>{
    const doSomething = m =>{
        const doWhatever = t =>{
            return 2 * n + 3 * m + t
        }
        return doWhatever
    }
    return doSomething
} 
console.log(higherOrder(2)(3)(10))

//using forEach method with callback function
const numbers = [1,2,3,4,5]
const sumArray = arr => {
    let sum = 0
    const callback = function(element){
        sum += element
    }
    arr.forEach(callback)
    return sum
}
console.log(sumArray(numbers))

/*SETTING TIME in js we can execute some activities in acertain interval
 of time or we can schedule for some time to execute activities*/
 //setInterval() we use this method in HOF to do something continuesly within some interval of time it takes callback funtion and time interval as parameter
 function sayhello(){
    console.log('hello')
 } setInterval(sayhello, 1000) //takes time interval in milliseconds
 //setTimeout() we use settimeout in HOF to execute some action at a given time in the future take callback funtion and timeout as parameter
 function sayhi(){
    console.log('Say hi')
 } setTimeout(sayhi, 3000) //execute after 3 seconds

//****Functional programing built in methods which can help us solve complicated problems using call back funtions*****//
//**forEach() iterrates array elements 
num = [1,2,3,4,5]
function total(arr){
sum =0 
/*arr.forEach(function(element){
    sum+=element
})*/
//arr.forEach(element => sum+=element)
arr.forEach(element => {
    sum+=element
})
return sum
}
console.log(total(num))

//*converting an array to uppercase
const countries = ['cameroon','togo','congo','portugal','spain']
countries.forEach(function(element){
    console.log(element.toUpperCase())
})

/*** map() iterates an array elements and modify the array elements*/
const digits = [1,2,3,4,5]
const digitssqr = digits.map((num) => num * num) //similar to using forloop loop and push 
console.log(digitssqr)
//
const countriesFirst3letters = countries.map((letters) =>{
    letters.toUpperCase().slice(0,3)
})
console.log(countriesFirst3letters)
/**filter() filter out elements which meet a given condition and returns as an array*/
 
const pays = ['ALBANIA','BOLIBIA','CANADA','DENMARK','ETHIOPIA','FINLAND','GERMANY','HUNGARY','IRELAND','JAPAN','KENYA']
const countriesLand = pays.filter((country) => country.includes('LAND'))
console.log(countriesLand)//print out all countries contianing land

//filter out from a dictionary
const scores = [
    { name: 'Asabeneh', score: 95 },
     { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]
  const scoresGreaterEighty = scores.filter((score) => score.score > 80)
  console.log(scoresGreaterEighty)
  /**reduce() takes a callback function the call back funtion takes accumulator, current, and optional intial value as parameter and return a singlr value */
  const numbre = [1,2,3,4,5,6]
  const waar = numbre.reduce((acc, cur) => acc + cur + 0)
  console.log(waar) // sums up all numbers in the array

  /**every() check is all elemnets are similar in one aspect */
  const areAllstr = pays.every((boll) => typeof boll === 'string')
  console.log(areAllstr) // here we are checking if all elements in the array are string

  /**find() return the frirst element that satifies a condition */
  const ages = [24,22,25,32,35,18]
  const age = ages.find((age) => age < 25)
  console.log(age)//returns 24 since it satisfies first

//
  const first = scores.find((user) => user.score > 86)
  console.log(first)

  /**findIndex() returns the position of the first element which satisfies the condition */
  const fisrtindex = scores.findIndex((userindex) => userindex.score < 95)
  console.log(fisrtindex)
  //
  const ageindex = ages.findIndex((ageindex) => ageindex < 25)
  console.log(ageindex)

  /**some() check if some elements respect a condition and returns true  */
  const bools = [true, true, false, true]
const areAllTrue = bools.some((b) => b === true) // Are all true? 

console.log(areAllTrue) // true
 
/** sorting numerical values using sort*/
const bizarnum = [9.81,3.14,100,37]
bizarnum.sort((a,b) => {
    return a - b
  //return b - a for descending order
})
console.log(bizarnum) // 3.14,9.81,37,100 in ascending oder