//function to print out full name
function fullName(){
    return 'Awa precious'
}console.log(fullName())
//function to print out firstname and last name
function fullName1(fname,sname){
    return `your names are ${fname} ${sname}`
}console.log(fullName1('AWA','Princewill'))
//funtion to add two numbers
function addNumber(fnum, snum){
    let total = fnum + snum
    return total
}console.log(addNumber(2,6))
//function to calculatee area
function Arearec(length,width){
    let area = length * width
    return `Area of rectangle is ${area}`
}console.log(addNumber(23,43))
//function to calculate perimeter
function perimeter(len,wid){
    return 2*(len+wid)
}console.log(perimeter(2,5))
//function to check season
function cheakseason(month){
    let season = month.toLowerCase()
    if (season == 'october'|| season=='november' || season=='september'){
        console.log('your are in a AUTUMN season')
    }else if(season == 'december'||season=='january'||season=='february'){
        console.log('your are in WINTER season')
    }else if(season == 'march'||season=='april'||season=='may'){
        console.log('your are in SPRING season')
    }else if(season == 'june'||season=='july'||season=='august'){
        console.log('your are in SUMMER season')
    }else{
        console.log('enter valid month')
    }
    return season
} console.log(cheakseason('july'))
//function to find the max out of three numbers

function findMAx(a,b,c){
    let max = Math.max(a,b,c)
    return max
}
console.log(findMAx(2,554,68))
//function to take array as parameter to print out its values
function printArray(arr){
    for(ray of arr){
        console.log(ray)
    }
    return arr
} numbers = [1,2,3,4,5]
 console.log(printArray(numbers))

//function to show date and time
const showDateTime = function(){
    const now = new Date()
    console.log(now)
} 
 showDateTime()
//function to reverse an array

const reverseArray = (...args) =>{
    reverse = args.reverse()
    return reverse
}
 console.log(reverseArray(1,2,3,4,5))
//write an function that reurns the reverse of array withou using reverse()
function reverseArray2(arr){
    let newArr = []
    for(let i=arr.length - 1; i>=0; i--){
        newArr.push(arr[i])
    }
    return newArr
} console.log(reverseArray2(numbers))
//write array that takes array as parameter and capitalize()    
const veges = ['tomato', 'potato', 'cabbage', 'onion', 'carrot']
const capitalizeArray = function(arr){
    let capArr = []
    for(capit of arr){
        capArr.push(capit[0].toUpperCase()+capit.substring(1))
    }
    return capArr
} 
 console.log(capitalizeArray(veges))
//
function additems(arr){
    let newArr = ['waar','combi',2,'mince']
    newArr.push(arr)
    return newArr
} console.log(additems('231'))
//
function removeitem(){
    const fruits = ['banana', 'orange', 'mango', 'lemon']
    fruits.pop()
    console.log(fruits) 
} removeitem()
//declare a function which takes numbers as parameters and return the sum of odd numbers
const sumOfNumbers = (...args) =>{
    let odd = 0
    let newArr =[]
    for(oddnum of args){
        if(oddnum % 2 == 0){
           continue
        }
        odd += oddnum
        newArr.push(oddnum)
    } 
    console.log(odd)
    return newArr
}
console.log(sumOfNumbers(2,3,5,4,7))
//declar a function which takes a numbers as parameters and return the sum of all even numbers
function sumofeven(...args){
    let sumeven = 0
    let newArr = []
    for(evennum of args ){
        if(evennum % 2 != 0){
            continue
        }
        sumeven += evennum
        newArr.push(evennum)
    }
    console.log(sumeven)
    return newArr
} console.log(sumofeven(2,3,5,4,7))

//a function which counts the number of even and odd numbers
const even_odd = (...args) =>{
    evenArr = []
    oddArr= []
    for(evenum of args){
        if(evenum % 2 != 0){
            continue
        }evenArr.push(evennum)
    }
    for(oddnum of args){
        if(oddnum % 2 == 0){
            continue
        }oddArr.push(oddnum)
    }
    return `total even numbers: ${evenArr.length}\ntotal odd numbers: ${oddArr.length}`
}
    console.log(even_odd(1,2,3,4,5,6,7,8,9))
//write a function which takes any given sum of arguments and returns thier total
function sumup(){
    return arguments.length
}console.log(sumup(1,2,3,4,5,6))
//function to generate rnadom user ip
/*function randomUserIp(){
    numbers = [0,1,2,3,4,5,6,7,8,9]
    let ipaddress = '';
    for(let i=0; 1<=3; i++){
        let segment = '';
        for(let j=0; j<3; j++){
            segment += numbers[Math.floor(Math.random() * numbers.length)]
        }
        ipaddress += segment;
        if (i < 2){
            ipaddress += '.'
        }
    }
    return ipaddress;
}
console.log(randomUserIp())*/
/*
function generateRandomMAC() {
    const hexDigits = "0123456789ABCDEF";
    let macAddress = "";
    for (let i = 0; i < 6; i++) {
        let segment = "";
        for (let j = 0; j < 2; j++) {
            segment += hexDigits.charAt(Math.floor(Math.random() * hexDigits.length));
        }
        macAddress += segment;
        if (i < 5) {
            macAddress += ":";
        }
    }
    return macAddress;
}

// Example usage:
console.log(generateRandomMAC()); // Output: A random MAC address, e.g., "3E:4F:1A:2B:3C:4D"*/
//funtion to return hexadecimal numbers
const hexadicmal = function(){
    let caracters = 'ABCDEF0123456789'
    let hex ='#'
    let digit = ''
    for(let i=0; i<6; i++){

        digit+=(caracters[Math.floor(Math.random() * caracters.length)])
    }
    hex+=digit
    return hex
} 
console.log(hexadicmal())
//functon to genrate user id
function userIdGenerator(){
    let charaters = 'ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstuvwxyz1234567890'
    let userd = ''
    for(let i=0; i<7; i++){
        userd+=charaters[Math.floor(Math.random() * charaters.length)]
    }
    return userd
}   
    console.log(userIdGenerator())
//modify user id so that it take two parameters and which determines number of characters and number of ids
const userIdGeneratorByuser = function(numCharac,numIds){
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstuvwxyz1234567890'
    let arr = []
    for(let j=0; j<numIds; j++){
       let userid = ''
        for(let i=0; i<numCharac; i++){
            userid+=characters[Math.floor(Math.random() * characters.length)]
        }
       arr.push(userid)
    }
    return arr
}  
    console.log(userIdGeneratorByuser(4,3))

//write a function which will return an array of hexadecimal colors in an Array
const arrayofHexacolors = function(){
    let character = 'ABCDEF0123456789'
    let arr = []
    for(let j=0; j<5; j++){
        let hex = '#'
        for(let i=0; i<6; i++){
            hex+=character[Math.floor(Math.random() * character.length)]
        }
        arr.push(hex)
    }
    return arr
}
    console.log(arrayofHexacolors())

//