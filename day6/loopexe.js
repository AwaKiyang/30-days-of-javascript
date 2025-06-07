const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']
const webTechs = ['HTML','CSS','Javascript','React','Redux','Node','MongoDB']
const mernStack = ['MongoDB','Express','React','Node']

for(a=0; a<=10; a++){
    console.log(a)
}
// iterate using while loopf
let b = 0
while(b<=10){
    console.log(b)
    b++
}
// iterate using do while loop
let c = 0
do{
    console.log(c)
    c++
}while(c<=10)

// iterate from 10 to 0
for(d=10; d>=0; d--){
    console.log(d)
}

//print out the diagram
let diaz = '#'
for(e=0; e<=7; e++){
    console.log(diaz.repeat(e))
}
//print out the result
for(let f=0; f<=10; f++){
    console.log(`${f} * ${f} = ${f * f}`)
}
// print out the result
console.log('\ni\ti^2\ti^3')
for(let g=0; g<=10; g++){
    console.log(`${g}\t${g**2}\t${g**3}`)
}
//using for loop to iterate even numbers from 0 to 100
let even_odd = []
let even_sum = 0
for(let h=0; h<=100; h++){
    if(h % 2 != 0){
        continue
    }console.log(h)
    even_sum += h
}
   even_odd.push(even_sum)
//using for loop to iterate odd numbers
let odd_sum = 0
for(let j=0; j<=100; j++){
    if(j % 2 == 0){
        continue
    }console.log(j)
    odd_sum += j
} 
    even_odd.push(odd_sum)
//using for loop to iterat prime numbers
for(let k=2; k<=100; k++){
    if(k / k != 1){
        continue
    }console.log(k)
}
//using for loop to iterate the sum of all numbers from 0 to 100
sum = 0
for(let l=0; l<=100; l++){
    sum += l
}console.log(`the sum is ${sum}`)
//
console.log(even_odd)
//generate a script that will generate an array of five random number
//genrate an array of five random number
let random_array = []
for(let ran=0; ran<5; ran++){
   let random = Math.floor(Math.random() * 100)
    random_array.push(random)
}
    console.log(random_array)

//creating a new array
let newArr = []
for(let m=0; m<countries.length; m++){
    newArr.push(countries[m].toUpperCase())
}console.log(newArr)
//or
let newArr2 = []
for(pays of countries){
    newArr2.push(pays.toUpperCase())
}console.log(newArr2)
//create an array of countries length
let arrlength = []
for(len of countries){
    arrlength.push(len.length)
}console.log(arrlength)
//or
let arrlength2 = []
for(let n=0; n<countries.length; n++){
    arrlength2.push(countries[n].length)
}console.log(arrlength2)

//genrate a random id 
let idlenght = 10
let characters ='ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstuvwxyz1234567890'
randomId = ''
for( o=0; o<=idlenght; o++){
    randomId += characters[Math.floor(Math.random() * characters.length)]
}console.log(randomId)

//generate hexadecimal numbers
let hexdecimals = '#'
let hexcharacters = 'ABCDEF0123456789'
for(let hex=0; hex<=5; hex++ ){
    hexdecimals += hexcharacters[Math.floor(Math.random() * hexcharacters.length)]
}console.log(hexdecimals)


//using cou ntries array to print an array of arrays containig [countires, frist3letters, length]
let optimum = []
for(pay of countries){
    optimum.push([pay, (pay[0]+pay[1]+pay[2]).toUpperCase(), pay.length])
}console.log(optimum)
//print out all countries containing the word land

for(let p=0; p<countries.length; p++){
    if(countries[p].includes('land') == false){
        continue
    }console.log(countries[p])
}
//print all countries ending with 'ai' in an array
let aiArray = []
for(let q=0; q<countries.length; q++){
    if(countries[q].endsWith('ia') == false){
        continue
    }aiArray.push(countries[q])
}    console.log(aiArray)

//determining the country with the highest index
const ind = []
for(let maxi=0; maxi<countries.length; maxi++){
    ind.push(countries[maxi].length)
}console.log(ind)

//create and array of countries having only five charaters
let charfive = []
for(let fiv=0; fiv<countries.length; fiv++){
    if(countries[fiv].length != 5){
        continue
    }charfive.push(countries[fiv])
} console.log(charfive)

/*creating an array from web techs
let techno = []
for(techs of webTechs){
    techno.push([techs,techs.length])
}console.log(techno)
countries.reverse()
console.log(countries.toUpperCase())
*/