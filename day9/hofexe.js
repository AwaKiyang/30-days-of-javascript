//hof exercise
//explain diff btween forEach(), map(), filter(), reduce()
/***
 * forEach() is use to iterate each element of an array an modify them
 * map() used to push each modifyed element of an array into a new array
 * filter() used to select out elements from an array that respect a given condition
 * reduce() used to sum up elements of an array
 */

//define a callback funtion

const age = (n) =>{
    return n
}
function gap(age){
    if(age > 10){
        console.log('youre older than me')
    }
    else{
        console.log('youre younger than me')
    }
    return 'sorry bro'
}
console.log(gap(age(3)))
//
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
pays = ['ALBANIA','BOLIBIA','CANADA','DENMARK','ETHIOPIA','FINLAND','GERMANY','HUNGARY','IRELAND','JAPAN','KENYA']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//use for each to console.log each country in country array
countries.forEach(element => console.log(element.toUpperCase()))
/**for(i=0; i<countries.length; i++){
    console.log(countries[i])
}*/ //another way of writing using forloop

//forEach to console.log each name in the name array
names.forEach(function(name){
    console.log(name)
})
//forEach to console.log each number in the arrray
numbers.forEach(num =>{
    console.log(num)
})
//use map() to create a new array of countries in uppercase
const Capcountry = countries.map((upper) => upper.toUpperCase())
console.log(Capcountry)

//use map to create an array of countries length 
const countrylen = countries.map((len) => len.length) 
console.log(countrylen)

//create an array of square numbers from the number array
const numbersqr = numbers.map((sqr) => sqr**2)
console.log(numbersqr)

//use map to create an arry of anmes ni uppercase
const upperNames = names.map((upname) => upname.toUpperCase())

//use fitlter to filter out countries containing 'land'

const lndcountry = countries.filter((land) => land.toLowerCase().includes('land'))
console.log(lndcountry)

//use filter to filter out countries having 6 carracters
const sixcountery = countries.filter((six) => six.length == 6)
console.log(sixcountery)

//filter out countries sarting with E
const Dcountry = countries.filter((startD) => startD.startsWith('D'))
console.log(Dcountry)
//filter out prices with values
const priceval = products.filter((val) =>  typeof val.price === 'number')
console.log(priceval)

//create a funtion which takes an array as a parameter and return it as an array of string
const getstrinLists = (arr) =>{
    const totring = arr.map((arg) => arg.toString())
    return totring
}
console.log(getstrinLists(numbers))

//use reduce to sum up all numbers in the number array
const tota = numbers.reduce((acc, cur) => acc + cur + 0)
console.log(tota)

//use some() to check if some names length are greater than 7
const grt = names.some((big) => big.length > 7)
console.log(grt)

//use every to check if all countries contian the word 'land'
const inc = countries.every((land) => land.toLowerCase().includes('land'))
console.log(inc)

//finf the first country with only six lrtters
const firstsix = countries.find((first) => first.length == 6)
console.log(firstsix)

//find the first index of the country with only six letters
const firstindex = countries.findIndex((firndex) => firndex.length == 6)
console.log(firstindex)


//write a funtion to sum up all orices in products

function tot(){
let sum = 0
const real = products.filter((realtotal) => typeof realtotal.price === 'number')
real.forEach(sumnum => sum+=sumnum.price)
return sum
}
console.log(tot())

//write a function which retuens an array based on similar parterns
function categorizePays(){
    const similar = pays.filter((thesame) => thesame.endsWith('IA'))
   // const similar = pays.filter((thesame) => thesame.endsWith('LAND'))
   // const similar = pays.filter((thesame) => thesame.includes('I')) etc
   return similar
}
console.log(categorizePays())

//
 let country =[
        {country:'German',count:7},
        {country: 'Arabic',count:25},
        {country:'Portuguese', count:9},
        {country: 'Spanish',count:24},
        {country:'Russian',count:9},
        {country:'Dutch',count:8},
        {country:'Swahili',count:4},
        {country: 'French',count:45},
        {country:'Chinese',count:5},
        {country: 'English',count:91}
]

const organise = (arr) =>{
    const descsort = arr.map((mapo) => mapo.count)
    const descreco = descsort.sort((a,b) => {
        return b - a
    })
    const final = arr.map((dem) => arr.count === descreco.forEach(des =>{
        return des
    }) )
    return final
    
}
//

console.log(organise(country))
