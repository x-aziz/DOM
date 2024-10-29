const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
      street: 'Heitamienkatu 16',
      pobox: 2002,
      city: 'Helsinki',
    },
    getPersonInfo: function () {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    },
  }
  
  //Object methods: Object.assign, Object.keys, Object.values, Object.entries
  //hasOwnProperty
  
  const copyPerson = Object.assign({}, person)
  console.log(copyPerson)

  
  const keys = Object.keys(copyPerson)
  console.log(keys) //['name', 'age', 'country', 'skills', 'address', 'getPersonInfo']
  const address = Object.keys(copyPerson.address)
  console.log(address) //['street', 'pobox', 'city']

  console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))