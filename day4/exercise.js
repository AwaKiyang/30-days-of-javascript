let age = prompt('enter your age')
  if (age >= 18){
    console.log('you are old enough to drive')
  }else {
    console.log(`you are ${age} years old you need ${18-age} more years to be able to drive`)
  }
//
let myAge = 21
let yourAge = prompt('enter your age')
  if (myAge > yourAge){
    console.log(`i am ${myAge - yourAge} years older than you`)
  }else if(yourAge > myAge){
    console.log(`you are ${yourAge - myAge} years older than me`)
  }else if(yourAge == myAge){
    console.log('we are thesame age')
  }else {
    console.log('enter a valid age')
  }
  //
let mAge = 21
let yAge = prompt('enter your age')
let val = Math.max(mAge,yAge)
  val == mAge
    ?console.log(`i am ${mAge-yAge} years older than you`)
    :console.log(`you are ${yAge-mAge} years older than me`)
//
let a = 4
let b = 3
    a > b
      ?console.log('a is greater than b')
      :console.log('b is greater than a')
//
let grade = prompt('enter your grade')
switch(true){
    case grade>0 && grade<=49:
        console.log('F grade')
    break
    case grade>=50 && grade<=59:
        console.log('D grade')
    break
    case grade>=60 && grade<=69:
        console.log('C grade')
    break
    case grade>=70 && grade<=89:
        console.log('B grade')
    break
    case grade>=80 && grade<=100:
        console.log('A grade')
    break
}
//
let month = prompt('enter ')
let season = month.toLowerCase()
if (season == 'october'|| season=='november' || season=='september'){
    console.log('your are in a AUTUMN season')
}else if(season == 'december'||season=='january'||season=='february'){
    console.log('your are in WINTER season')
}else if(season == 'march'||season=='april'||season=='may'){
    console.log('your are in SPRING season')
}else if(season == 'june'||season=='july'||season=='august'){
    console.log('your are in SUMMER season')
}else{
    console.log('enter valid month')
}
//
let day = prompt('enter day')
let cday = day.toLowerCase()
if (cday=='monday'||cday=='tuesday'||cday=='wednesday'||cday=='thursday'||cday=='friday'){
    console.log(`${cday} is a week day`)
}else if (cday=='saturday'||cday=='sunday'){
    console.log(`${cday} is weekend`)
}else{
    console.log('enter a valid day')
}
