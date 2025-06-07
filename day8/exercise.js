//empty object called dog
let dog = Object()

//add items to the dog object
dog.name = 'lucy'
dog['legs'] = 4
dog.color = 'blue'
dog.bark = function(){
    return 'woof'
}
console.log(dog,dog.bark())
//get dogs keys
let keys = Object.keys(dog)
console.log(keys)
//set new dog property known as getDoginfo
dog.getDoginfo = function(){
    return `breed name: ${this.name}, legs: ${this.legs}, name: ${this.color}`
}
console.log(dog.getDoginfo())

//
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  //find person who many skills in the user object
    const findMostSkilledUser = (users) => {
        let mostSkilledUser = null;
        let maxSkills = 0;

        for (let user in users) {
            if (users[user].skills.length > maxSkills) {
                maxSkills = users[user].skills.length;
                mostSkilledUser = user;
            }
        }

        return mostSkilledUser;
    };

    console.log(findMostSkilledUser(users)); // Output: "Asab"
//count logged in users having point greater than 50 
const greaterpoints = (users) => {
    count = 0
    let total = []
    for (let user in users){
        if(users[user].points < 50){
            continue
        } count++
        total.push(user)
    }
    console.log(total)
    return count
}
    console.log(greaterpoints(users))

    //find people who are MERN developers 
    const mern = (n) =>{
        count = 0;
        let devs = []
        for(let user in n){
            if(n[user].skills.includes('React' && 'Express' && 'MongoDB' && 'Node')){
                count++
                devs.push(user)
            }
        }
        console.log(devs)
        return count
    }
        console.log(mern(users))

    //get users namse
    let userNames = Object.keys(users)
    let properts = Object.values(users)
    console.log(userNames,properts)

    //
    const users2 = [
        {
            _id: 'ab12ex',
            username: 'Alex',
            email: 'alex@alex.com',
            password: '123123',
            createdAt:'08/01/2020 9:00 AM',
            isLoggedIn: false
        },
        {
            _id: 'fg12cy',
            username: 'Asab',
            email: 'asab@asab.com',
            password: '123456',
            createdAt:'08/01/2020 9:30 AM',
            isLoggedIn: true
        },
        {
            _id: 'zwf8md',
            username: 'Brook',
            email: 'brook@brook.com',
            password: '123111',
            createdAt:'08/01/2020 9:45 AM',
            isLoggedIn: true
        },
        {
            _id: 'eefamr',
            username: 'Martha',
            email: 'martha@martha.com',
            password: '123222',
            createdAt:'08/01/2020 9:50 AM',
            isLoggedIn: false
        },
        {
            _id: 'ghderc',
            username: 'Thomas',
            email: 'thomas@thomas.com',
            password: '123333',
            createdAt:'08/01/2020 10:00 AM',
            isLoggedIn: false
        }
        ];
    
        const products = [
      {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
          { userId: 'fg12cy', rate: 5 },
          { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
      },
      {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
      },
      {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
      }
    ]

    