//array is a collections of different datatypes which are ordered, changeable and modifiable.the datatypes may be duplicate similar or different
//creating an array
const arr = Array()
const myArray = []
console.log(myArray)

//creating an array with values
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]//array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon']
const veges = ['tomato', 'potato', 'cabbage', 'onion', 'carrot']
const animal_products = ['milk', 'meat', 'butter', 'yogurt']
const webtechs = ['HTML', 'CSS', 'js','React','Redux','Node','MongoDB']
const countries = ['Finland','Denmark', 'Sweden', 'Norway', 'Iceland']

//printing array and its length
console.log(`numbers : ${numbers} \n total  numbers ${numbers.length}`)
console.log(`fruits : ${fruits} \n number of fruits ${fruits.length}`)
console.log(`veges : ${veges} \n number of veges ${veges.length}`)
 
//array can have diferent dat types
const ar = ['Asebeneh', 250, true, {country: 'Finland', city: 'helsinki'}, {skills: ['HTML', 'CSS', 'JS']}]
console.log(ar)

//creating an array using split
let txt = 'I love bread and chocolate is too nice'
const word = txt.split(' ')
console.log(word)

//accesing an array through index
console.log(fruits[0]) //prints out fruit with index 0
console.log(veges[veges.length - 1]) //prints out last item in array

//modifying an array we modify using index
fruits[0] = 'pear'
console.log(fruits)
//modifying llast index
webtechs[webtechs.length - 1] = 'Flask'
console.log(webtechs)

//METHODS TO MANIPULATE ARRAYS
//
//creating a static values with fill to fill an array element with static values
let foursvalues = Array(4) //here we have created an array with 4 empty values
let fivevalues = Array(5).fill('5')
let sixvalues = Array(6).fill(6)
console.log(fivevalues)
console.log(sixvalues)
//~concatenating list using concat()
const firslist = [1,2,3]
const seconlist = [4,5,6]
console.log(firslist.concat(seconlist))

//getting index of an item in an array using indexOf()
console.log(countries.indexOf('Denmark'))
console.log(veges.indexOf('onion'))
console.log(countries.indexOf('togo')) //if item doesn't exist it returns -1
//using lastIndexOf() to return the last occurence of an item in a list

const number = [1,2,3,4,3,2,1]
console.log(number.indexOf(1)) //first occurence
console.log(number.lastIndexOf(1)) //lasrt occurence

//checking if an item is in an array using includes()
 console.log(countries.includes('Denmark')) //returns true
 console.log(veges.includes('leeks'))// returns false

//checking if datatype is an aaaray using isArray
waar = 0
console.log(Array.isArray(animal_products))
console.log(Array.isArray(waar))

//converting to string using tostring()
console.log(number.toString())

//joining the elements of an array using join()
//by defualt it joins with commas but we can pass differrent string parameter which can be joined between the items
console.log(fruits.join())
console.log(fruits.join(''))
console.log(fruits.join(' '))
console.log(fruits.join(', '))
console.log(fruits.join(' # '))

//using slice() to cut out multiple items in and array it can take two parameters starting and ending position
console.log(webtechs.slice(0))//returns all items
console.log(webtechs.slice(1,4)) //returns item starting from index one to item ending  before index four

//adding items to an array using push()
countries.push('Cameroon')
console.log(countries) //adds to the end of the array
animal_products.unshift('cheese')//adds at the begining of the list
console.log(animal_products)

//removing items from a list
webtechs.pop()
console.log(webtechs)//removes last item of the array
numbers.shift()//removes first item in the array
console.log(numbers)

//reversing an array using reverse()
veges.reverse()
console.log(veges) //reverse the order
 
//sorting out an Array using sort
countries.sort()
console.log(countries)// dislpay it in ascending order
console.log(numbers)

//an array of array you can create an array containing an array
anArrayOfArray = [[1,2,3],[4,5,6]]
console.log(anArrayOfArray)
console.log(anArrayOfArray.join())
