const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]
//destruct and assidn ekements of constant array to e,pi,grvity,bodytemp,watertemp
const [e,PI,gravity,humanBodyTemp,waterBoilingTemp] = constants
//destruct and assign elemnts of countries array to fin,est,sw,den.nor
let [FIN,EST,SW,DEN,NOR] = countries
//destruct assign retangle array
let {width:w, height:h, area:a, perimeter:p} = rectangle

//destruct user array and get all keys
for(let{name,scores,skills,age} of users){
    console.log(name,scores,skills,age)
}
// find user with less than 2 skills
for(let{name,scores,skills,age} of users){
    if(skills.length < 2){
        console.log(name,scores,skills,age)
    }
}

//write a funtion which will convert the student array in to a structured oject
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]

const convertArray = (arr) =>{
    structured = []
    for(let[name,skill,score] of arr){
    structured.push({names : name,skills : skill,scores : score})
    }
    return structured
}
console.log(convertArray(students))
//copy the student array
let coptstudent = [...students]
//modify this object
/**
 * Add Bootstrap with level 8 to the front end skill sets
 * Add Express with level 9 to the back end skill sets
 * Add SQL with level 8 to the data base skill sets
 * Add SQL without level to the data science skill sets
 */
const studen = {
    nom: 'David',
    aget: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }
    //
    let {nom,aget,skills} = studen
    skills.frontEnd.push({skill : 'Bootstrap',level : 8})
    skills.backEnd.push({skill : 'Express', level : 9})
    skills.dataBase.push({skill : 'SQL', level : 8})
    skills.dataScience.push('SQL')
    console.log(nom,aget,skills)

 