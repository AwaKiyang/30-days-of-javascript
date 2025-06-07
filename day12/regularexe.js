//Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
let txtsum = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
let waar = txtsum.match(/\d+/g)
tota = 0
for(i=0; i<waar.length; i++){
    tota+=Number(waar[i])
}
console.log(tota)

//write a funtion to check if a varaible is valid
const validity = (entry) =>{
    pattern= /^[0-9]/
    if(pattern.test(entry)){
        return 'invalid password shoul not start with number'
    }
    else{
        return 'good password'
    }
}
console.log(validity('2waar'))

// from text give the n most frequent words
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

function tenMost(n){
  
    let most = []
    let pattern = paragraph.match(/\w+/g) // \w+ checks for each word
    let setpattern = new Set(pattern)
    for(letter of setpattern){
        dams = pattern.filter((lng) => lng === letter)
        most.push({word : letter, count : dams.length})
    }
    most.sort((a,b) => b.count - a.count)
    return most.slice(0, n)
}
console.log(tenMost(10))


