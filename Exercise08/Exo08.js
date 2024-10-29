const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

for (const [country, city] of countries) {
  console.log(country, city);
}

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

for (const [first, second, third, fourth] of fullStack) {
  console.log(first, second, third, fourt);
}
const [x, y] = [2, (value) => value ** 2];
// We access the value of an object using the following methods:
const rectangle = {
  width: 20,
  height: 10,
};

let width = rectangle.width;
let height = recangle.height;

// or

let width1 = rectangle[width];
let height2 = recangle[height];

//   When we destructure an object the name of the variable should be exactly the same as the key or property of the object. See the example below.
let { width3, height4 } = rectangle;
console.log(width3, height4, perimeter); // 20, 10

let { width6, height7, perimeter } = rectangleconsole.log(
  width5,
  height7,
  perimeter
); // 20, 10, undefined
//   Renaming variable names
let { width: w, height: h } = rectangle;
const props = {
  user: {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    age: 250,
  },
  post: {
    title: "Destructuring and Spread",
    subtitle: "ES6",
    year: 2020,
  },
  skills: ["JS", "React", "Redux", "Node", "Python"],
};

const { user, post, skills } = props;
const { firstName, lastName, age } = user;
const { title, subtitle, year } = post;
const [skillOne, skillTwo, skillThree, skillFour, skillFive] = skills;
const countrie = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland',
  ]
  
  let [gem, fra, , ...nordicCountries] = countrie
  
  console.log(gem)
  console.log(fra)
  console.log(nordicCountries)