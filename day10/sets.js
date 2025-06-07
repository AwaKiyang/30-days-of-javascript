//set is a collection of elements, sets can only contain unique elements 
//creating a set
const companies = new Set()
console.log(companies)
//crearint set from array
const languages = [
    'english',
    'finish',
    'spanish',
    'english',
    'spanishl',
    'french'
]
const setOflanguages = new Set(languages)
console.log(setOflanguages) // it doesnt print out element which repeat

for(let language of setOflanguages){
    console.log(language)
}// using for loop to iterate through a set

//adding new element to a set
const company = new Set()
company.add('google')
company.add('youtube')
company.add('zoom')
company.add('amazon')
console.log(company.size) //just like .lenght
console.log(company)

//deleting element from a set
console.log(company.delete('amazon'))
console.log(company)

//checking if an element exist in a set()
console.log(company.has('zoom'))
console.log(company.has('facebook'))

//clearing a set
const dams = ['dams','booba']
const asay = new Set(dams)
asay.clear()
console.log(asay)

//union of sets (AuB)
let a = [1,2,3,4,5]
let b = [3,4,5,6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C) // it has made a union of a and b

//intersection of sets (AnB)
let d = a.filter((dig) => b.includes(dig))
let D = new Set(d)
console.log(D)

//differrence of a set (A/B)
let e = a.filter((dig) => !B.has(dig))
let E = new Set(e)
console.log(E)

//creating a map()
const map = new Map()
console.log(map)

//creating a map from n array
pay = [
    ['finland','helsinki'],
    ['sweden','stockholm'],
    ['norway','oslo']
]
const patmap = new Map(pay)
console.log(patmap)

//adding new elements to a map
patmap.set('cameroon','yaounde')
patmap.set('nigeria','france')
patmap.set('france','paris')

console.log(patmap.size)
console.log(patmap)

//getting  value from a map
console.log(patmap.get('france'))