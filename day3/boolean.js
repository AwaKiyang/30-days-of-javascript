let falsValue = 4 < 3
let TrueValue = 4 > 3
console.log(`let 4 < 3 be ${falsValue}, and 4 > 3 be ${TrueValue}`)
//assignment operators can be combine with other arithmetic symbols to give other assingment operators
let x = 5, y = 2
console.log(x+=y)//same as x = x + y returns 5
console.log(x-=y)//same as x = x - y returns 1
console.log(x/=y)//same as x = x / y
console.log(x*=y)//same as x = x * y
console.log(x**=y)//same as x = x ** y
//Arithmetic opreators which are
let a = 5,b = 3
console.log(a+b, a-b, a*b, a/b, a%b, a**b)//here are the varios arithmetic operations
//comparison operators
console.log(3 == 2)//returns false since 3 is not equal to 2 == stands for equivalent in value
console.log( 3 === '3')//returns fasle since === stands for equal in value and datatype
console.log(3 === 3)//returns true
console.log(3 != 2)//returns true since != stands for not equal to
console.log(3 > 2)//returns true since 3 is greater than 2
console.log(3 < 2)//returns false since 3 is not less than 2
console.log(3 >= 2)//returns true since 3 is greater than 2 ( >=) stands for greater thna or equal to
console.log(3 <= 3)//returns true

//logical operators
// we have the ampersand which stands for 'and' which returns true only if both conditions are true
const check = 4 < 3 && 3 > 2 // returns false since one is false
const check2 = 4 > 3 && 2 < 3 // returns true since both are true
const check3 = 4 < 3 && 2 > 3 // returns false since both are false
//we have the pipe which stands for 'or' which returns true if atleast one statement is true
const check4 = 4 < 3 || 3 > 2 //returns true since one is true
const check5 = 4 > 3 || 2 < 3 //returns true since all are true
const check6 = 4 < 3 || 2 > 3 //returns false since all are false
//negation '!' which give the oposite value on the statement
let check7 = 4 > 3 //returns true
let check8 = !(4 > 3) //negates it
console.log('and',check,check2,check3,'or',check4,check5,check6,'negation',check7,check8)

//increment opreators
    //pre-increment 
let count = 0
console.log(++count) //here it returns 1 because the ++ is added before the varaible which means the next value will be 1 the next time its called
console.log(count) //value is one since it was preincremented
    //post-increment
let count1 = 0
console.log(count1++) //here its value will be 0 its value will only change the next time its called
console.log(count1)//its value will be 1 since it has been post incremented

//decrement oparetors
    //pre-decrement
let drop = 0
console.log(--drop)//returns -1 since it's pre decremented
console.log(drop)//returns -1
    //post-decrement
let drop1 = 0
console.log(drop1--)//returns 0 since its post decremented meaning it's value will change only the next time its called
console.log(drop1)

//ternary oprators
//this is another way we can write conditionals using oprators
    let IsRaining = true //were is raining value was set to true so it return the true condition
    IsRaining //condition
        ? console.log('you need a raincoat') // ? represents for true conditions
        : console.log('no need for a raincoat') // represents the false condition
    let Waar = false
    Waar
        ? console.log('papa')
        : console.log('tous les nerd')
    //youc an also paly around and create other conditions like
    let number = 5
        number > 0
            ?console.log(`${number} is a positive number`)
            :console.log(`${number} is a negative number`)