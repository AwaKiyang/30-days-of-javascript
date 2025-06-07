//destruction is a way to unpack arrays, and objects and assinging them to distinct varaibles
let numbers = [1,2,3,4,5]
let [numOne,numTwo,numThree,numFour] = numbers
console.log(numOne,numTwo)
//
let names = ['awa','precious','kiyang','damso']
let [fname,sname,tname,foname] = names
console.log(fname,sname,tname,foname)
//
const fullstack = [
    ['html','css','js','react'],
    ['node','express','MonogoDb',]
]
const [frontend,backend] = fullstack
console.log(frontend,backend)
//skipping values in the array we use additional comma
const num = [1,2,3]
const [n1,,n3] = num
const [,n4,n5] = num
console.log(n1,n3)//1, 3
console.log(n4,n5) //2 ,3
//we can use default value incase the index in the array is undefined
const namet = [undefined,'brook','david',]
let [
    fperson = 'Awa',
    sperson,
    tperson,
    foperson = 'Kiyang'
] = namet
console.log(namet)
//we can assign remain value in and array using spread operators
let numss = [1,2,3,4,5,6,7,8,9,10]
let [dig1,dig2,dig3, ...rest] = numss
console.log(dig1,dig2,dig3)
console.log(rest)

//destructing an iteration
const countries = [['finland','helsinki'],['sweden','stockholm'],['norway','olso']]
for([country,city] of countries){
    console.log(country,city)
}

//destructuring an object
const rectangle = {
    width : 20,
    height : 10,
    area : 200
}
let {width,height,area} = rectangle
console.log(width,height,area)
//or we can rename during structuring
let { width : w,height : h,area : a} = rectangle
console.log(w,h,a)

//object parameter without destructuring
const perimeter = (n) =>{
    return 2 * (n.width + n.height)
} 
console.log(perimeter(rectangle))

//object parameter with destructuring
const perim = ({width,height}) =>{
    return 2*(width+height)
} 
console.log(perim(rectangle))

//destructing object during iteration
let  todolist = [
    {
        task:'prepare Js Test',
        time:'4/1/2020 8:30',
        completed:true
    },
    {
        task:'Give Js Test',
        time:'4/1/2020 10:00',
        completed:false
    },
    {
        task:'Asses Test Result',
        time:'4/1/2020 1:00',
        completed:true
    }
]
for(const {task,time,completed} of todolist){
    console.log(task,time,completed)
}

//spread operators
let nus = [1,2,3,4,5,6,7,8,9,10]
let [di1,di2,di3, ...remain] = nus
console.log(di1,di2,di3)
console.log(remain)

//using spread operators to copy array
let ab = [...nus]
console.log(ab)
let b = [1,2]
let c = [3,4]
let d = [...b, ...c]
console.log(d)

//spread oprator to copy array
const user = {
    name:'awa',
    title:'programmer',
    country:'Finland',
    city:'Douala'

}
let copyobject = {...user}
console.log(copyobject)

//modifying the object while copying
let copy2 = {...user,country:'Cameroon'}
console.log(copy2)

//spread operator with arrow function
const sumallnums = (...args)=>{
    let sum = 0
    for(let i of args){
        sum+=i    }
    return sum
}
console.log(sumallnums(1,2,3,4,5,6))

