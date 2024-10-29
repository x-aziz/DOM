const numbers = [1, 2, 3, 4, 5]
numbers.forEach((number, i) => {
  console.log(number, i)
})

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
countries.forEach((country, i, arr) => {
  console.log(i, country.toUpperCase())
})

for (const country of countries) {
  console.log(country.toUpperCase())
}
// 6. for in
const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js'],
  }
  
  for (const key in user) {
    console.log(key, user[key])
  }
//   Regular for loop can be used anywhere when the number of iteration is known.
// While loop when the number of iteration is not know
// Do while loop and while loop are almost the same but do while loop run at least once even when the condition is false
// for of is used only for array
// forEach is used for array
// for in is used for object