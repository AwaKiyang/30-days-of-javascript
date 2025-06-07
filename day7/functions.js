//function is a reuseable block of code which can be used to perform certain functions//
//creation of a function 
function functionName(){
    //code goes here
}
functionName()//here we have called the function

//creating a function without a parameter
function square(){
    let num = 2
    sqr = num**2
    console.log(sqr)
} square()
//function to add numbers
function Addnum(){
    let num1 = 10
    let num2 = 23
    let add = num1 + num2
    console.log(add)
} Addnum()
//function to print fullname
function name(){
    let firstName = 'awa'
    let secondName = 'precious'
    let fullName = firstName+' '+secondName
    console.log(fullName)
} name()

//functions can also return values using return
function redux(){
    let reduce = 4 - 2
    return reduce
} console.log(redux())

//function with parameters
//in functions we can pass different parameters to a function
function AreaOfCircle(r){
    let Area = Math.PI * r * r
    return Area;
} console.log(AreaOfCircle(3))

//funtion with two paraameters
function realName(fname, sname){
    let fullname = fname+" "+sname
    return fullname
}console.log(realName('Awa','Kiyang'))

//function with multiple parameters
function sumArray(arr){
    let sum = 0
    for(let i=0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum
}
let numbers = [1,2,3,4,5,6,7]
console.log(sumArray(numbers))
//funtion declaration using unlimited number of parameters in regular function
//a function declaration provides a function scoped arguments array like object. Any thing we passed as arguments in the function can be accesed from argumnets inside funtion
function sumArray(){
    let sum = 0
    for(let i=0; i<arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}console.log(sumArray(2,3,4,9))

//unlimited number of parameters using arrow function
const Sumallnums = (...args) =>{
    let sum = 0
    for(let elemnents of args){
        sum += elemnents
    }
    return sum
}
console.log(Sumallnums(2,3,4,5,6))
console.log(Sumallnums(5,8,2,1))
console.log(Sumallnums(2,8,4))

//anonymous function or without a name
const anonymousFun = function(n){
   return n * n
}
//expression functions after we create nonymoius functions we assign it to a variable
console.log(anonymousFun(2))
//self invoking functions1are anonymous functions who do not neeed to be called to return a value
 let squareNUM = (function(n){
    return n * n
 })(10)
console.log(squareNUM)
//arrow function is just another way of declare a funtion and it s an alternative to function()
let num = n =>{
    return n**3
}
 console.log(num(3))

//function with default parameter
//use to assign default values to parameters incase they are being called without an argument
function pronouns(name = 'john'){//we have assigned john as default name
    return `your name is ${name}`
}
console.log(pronouns()) // being called like this will give the default name
console.log(pronouns('awa'))

//writing default values using arrow functions
const names = (fistanme = 'awa', secondName = 'precious') =>{
    return `your names are ${fistanme} ${secondName}`
}
console.log(names('princewil','muye'))
console.log(names('ndoh')) //assings only to first parameters
console.log(names()) //returns default parameters
