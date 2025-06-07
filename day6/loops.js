//javascipt loopimagine you are ask to print out 0 to 100 thats really stresfull so thats why python loops come in place to permit you dos o
for(let i=0; i<=15; i++){
console.log(i)}

//for loops syntax
// for( initialization; condition; increment/decrement){
//  code goes here}

//counting from 10 to 0
for(let a=10; a>=0; a--){
    console.log(a)
}

//multiply many numbers
for(let b=0; b<=10; b++){
    console.log(`${b} * ${b} = ${b * b}`) //multiply it
}
//adding and array items to another empty array using list
let countries = ['Cameroon','senegal','togo','zambia','morroco']
let newArr = []
for (let c=0; c<countries.length; c++){
        newArr.push(countries[c].toUpperCase())
}
 console.log(newArr)

 //adding all elements in and arrat
 let numbers = [1,2,3,4,5]
 let sum = 0
 for( let d = 0; d<=numbers.length; d++){
    sum += numbers[d] // same as sum = sum + d
    console.log(sum)
 }
 //crrating a new array based of another array
 let newNum = []
 for (let e=0; e<numbers.length; e++){
    newNum.push(numbers[e] * 3)
 }
 console.log(newNum)
 

 //while loop
 let f = 0
 while(f<=5){
    console.log(f)
    f++
 }
 //do while loop
 let g = 6
 do{
    console.log(g)
    g--
 }while(g>=0)

 //for of loop use dfor arrays. its very hand way to iterate through an array if we are not interrested in the index of each element in the array
let polo =[]
 for (pays of countries){// it has copyied the countries array into pays
    console.log(pays)//prints all countries 
    console.log(pays[0])//prints first letter of each country
    polo.push(pays.toUpperCase())//from here now we can use the push method to push pays content into and array polo
 }
    console.log(polo)
//using for of loop to play with an array
let total = 0
let quad = []
for(numb of numbers){
    total += numb
    //console.log(total)//sum all numbers
    //console.log(numb * numb)//multiply all the numbers by themselves
    console.log(numb * 3)//multiplying all numbers by 3
    quad.push(numb * 3)//here we have pushed those values into an array
}
    console.log(quad)
    
//break used to interupt a loop
for(let h=0; h<=5; h++){
    if(h == 3){
        break
    }console.log(h)//using break made it stop a 3
}
//we use continue to skip and continue
for(let j=0; j<=6; j++){
    if(j == 4){
        continue
    }console.log(j)//using continue made it skip 4
}
//determining the country with the highest index
ind = []
for(let maxi=0; maxi<countries.length; maxi++){
    ind.push(countries[maxi].length)
}console.log(ind)