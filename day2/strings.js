//concatenation
let firstName = 'Awa'
let secondName = 'Precious'
let string = 'Javascript '
l1 = 'A'
l2 = 'W'
let num = '10'
let deci = '3.141'
let space = ' space man '
let context = '30 days of Javascript'
console.log(firstName + secondName)
//using long literals
let  sentence = "this is a multiline literal\
damn nigger"
//let's use escape sequence
console.log('hopw everyone  is enjoying the 30 days of javascript challenge\nDo you?')
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t\t5')
console.log('Day 2\t4\t\t5')
console.log('Day 3\t2\t\t6')
console.log('Day 4\t7\t\t2')
console.log('This is a baclslash symbol (\\)')
console.log('In every programming language there is a sentence that starts with \"Hello world!\" or \'Hello world!\'')
console.log('The saying \'seeing is believing\' isn\'t correct in 2020')
//injecting literals inrto twxt
let a = 2
let b = 3
console.log(`the sum of ${a} and ${b} is ${a+b}`)
console.log(`${a} is less than ${b} : ${a<b}`)
console.log(firstName.length)
//acessing caracters
console.log(string.length)
console.log(string[0]) //displays J
console.log(string[3]) //displays a
console.log(string[9]) //displays t
console.log(string[string.length - 1])
//converting to upper case and lower case
console.log(string.toUpperCase())
console.log((l1 + l2 + l1).toLowerCase())
//console.log slica a character
console.log(string.substring(4,10)) // display script
console.log(string.substring(3,9)) // displays ascri // it takes two arguments, the starting index and ending character
//using split to split text // it tranforms text into an array
console.log(string.split())
console.log(context.split())
console.log(string.split(''))
console.log(context.split(' '))
console.log(context.split(''))
//trim text to remove space at both end of the string
console.log(space.trim())
//to check wheter a substring exist in a string we use //includes
console.log(string.includes('J'))
console.log(string.includes('ava'))
console.log(string.includes('j')) //response false because js is case sensitive
//replace a substring withini a string
console.log(string.replace('Java','Waar')) // returns waarscript
console.log(context.replace('Javascript','Python')) //returns 30 days of python
//to check for the ASCII code of the character using it's index number
console.log(string.charAt(2))
//using indexOf() to return index number of a substring
console.log(string.indexOf('ava'))
console.log(string.indexOf('J'))
// using function to display last index value of a string
console.log(string.lastIndexOf('a'))
// concat() is use to concatenate a string
console.log(string.concat('is','nice')) //returns javascript is nice
// to check the begining and ending substring of string we use 'startsWith ' and 'endsWith'
console.log(context.startsWith('30')) //returns true
console.log(context.endsWith('script')) //returns true
console.log(context.endsWith('ptyhon')) // returns false
// using search which i similar to indexOf
console.log(string.search('ava'))
// using repeat() a string to a certain number of time we use it
console.log(string.repeat(10))
  
//converting datatypes 
//string to interger
console.log(+num)
console.log(parseInt(num)) // sring to float we can use parseFloat or the other
console.log(parseFloat(deci))
console.log(parseInt(parseFloat(deci))) // returns 3 since we can use parseint to convert float numbers to intergers
console.log(Number(num)) // all the above methods can be use