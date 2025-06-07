//learning objects whcih are similar to dictoinaries in python
//creating an object
const person = {}
let thisMAn = Object()
console.log(typeof(thisMAn),typeof(person)) //returns object

//creating object with values
const rectangle = {
    length: 20,
    width: 20
}
console.log(rectangle)

let individual = {
    firstName: 'Awa',
    secondName: 'Precious',
    age: 21,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML','CSS','Javascript','React','Node','MongoDB','Python','D3.js'],
    address: {
        street: 'Madoumou',
        pobox: 2022,
        city: 'yaounde'
    },
    isMarried: true,
    getfullName: function(){
        return `${this.firstName} ${this.secondName}`
    }

}
console.log(individual)
//accessing items in an object
console.log(individual.age)
console.log(individual.country.length)
console.log(individual['skills']) //another way of accesing
console.log(typeof(individual.isMarried))

//accessing the getfullName function using (this)
console.log(individual.getfullName())
//adding new items and values to an object
person.nationality = 'Ethopian'
individual.country = 'Cameroon'
person.title = 'teacher'
individual['skills'].push('Meteor')
individual.skills.push('saas')
person.isMarried = true
person.getsum = function(){ //adding a function into an object
    return 2*2
}

console.log(person)
console.log(person.getsum())
console.log(individual)

//copying and object
const copyperson = Object.assign(person)
console.log(copyperson)
//obtaining object keys and values
const individualKeys = Object.keys(individual)
const personvalues = Object.values(person)
const individualAddress = Object.keys(individual.address)
console.log(individualKeys)
console.log(personvalues)
console.log(individualAddress)

//obtaining both keys and values in an array
const properties = Object.entries(person)
console.log(properties)
//checking if a property exist within an object
console.log(person.hasOwnProperty('skills'))
console.log(person.hasOwnProperty('title'))
