//Conditions are used to make differrent decisions based on diff conditions and can be implemented using 
// 'if, if else, if else is else, tenary operators,switch
//in js whe use to check if the condition is true and execute the block code
let isRaining = true
if (isRaining){
    console.log('today is a rainy day')
}
//if else is used in js to return true or false conditions
let num = prompt('enter number')
if (num > 0){
    console.log(`your number ${num} is greater than zero`)
} else{
    console.log(`your number ${num} is less than zero`) 
}
//if else if else to return a chain of multiple conditions with different values
let numb = prompt('enter a number')
if (numb>5 && numb<10){
    console.log(`you number ${numb} is between 5 and 10`)
}else if(numb<6){
    console.log(`your number ${numb} is less than 6`)
}else if(numb>9){
    console.log(`your number ${numb} is greater than 9`)
}else {
    console.log('enter a valid number')
}

//code to check the date of today
//let today = prompt('enter days')
//let day = today.toLowerCase()
if (day == 'monday'){
    console.log(`today is ${day}`)
}else if (day == 'tuesday'){
    console.log(`today is ${day}`)
}else if (day == 'wednesday'){
    console.log(`today is ${day}`)
}else if (day == 'thursday'){
    console.log(`today is ${day}`)
}else if (day == 'friday'){
    console.log(`today is ${day}`)
}else if (day == `saturday`){
    console.log(`today is ${day}`)
}else if (day == 'sunday'){
    console.log(`today is ${day}`)
}else {
    console.log('enter a valid day')
}
//using switch which is an altenative to is elses if else
let today = prompt('enter days')
let day = today.toLowerCase()
switch(day){
    case 'monday':
        console.log('today is moday')
        break
    case 'tuesday':
        console.log('today is tuesday')
        break
    case 'wednesday':
        console.log('today is wednesday')
        break
    case 'thursday':
        console.log('today is thursday')
        break
    case 'friday':
        console.log('today is friday')
        break
    case 'saturday':
        console.log('today is saturday')
        break
    case 'sunday':
        console.log('today is sunday')
        break
    default:
        console.log('enter a valid week day')
}
//write code using switch
let waar = prompt('enter a number')
switch(true){
    case waar > 0:
        console.log(`your number ${waar} is an positive number`)
        break
    case waar == 0:
        console.log(`your number is zero`)
        break
    case waar < 0:
        console.log(`your number ${waar} is a negative`)
        break
    default: console.log('enter a valid number')
}//ternary operators 
    let digit = prompt('enter digit')
        digit%2 == 0
            ?console.log(`your digit ${digit} is even`)
            :console.log(`your digit ${digit} is odd number`)