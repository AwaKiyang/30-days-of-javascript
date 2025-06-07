const a = [4,5,8,9]
const b = [3,4,5,7]
const countries = ['Finland','Sweden','Norrway']
const dam = new Set(a)
//create an empty set
let empty = new Set()

//create a set containg o to 10 using lop
let num = new Set() 
for(let i=0; i<11; i++){
    num.add(i)
}
console.log(num)

//remove an element from the set
num.delete(0)
console.log(num)

//clear a set
dam.clear()
console.log(dam)

//create a map of country and country length
let data =[
    ['cameroon',8],
    ['congo',5],
    ['france',6],
    ['chile',5]
]
const realdata = new Map(data)
console.log(realdata)

//(AuB)
let c = [...a ,...b]
let C = new Set(c)
console.log(C)

//(AnB)
let d = a.filter((num) => b.includes(num))
let D = new Set(d)
console.log(D)

//(A/B)
let e = a.filter((num) => !b.includes(num))
let E = new Set(e)
console.log(E)

