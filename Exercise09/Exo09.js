// Using function declaration

const countries = ["Finland", "Estonia", "Sweden", "Norway"];

const newCountries1= countries.map(function (country) {
  return country.toUpperCase();
});

console.log(newCountries1);

// map using an arrow function call back

const newCountries2 = countries.map((country) => country.toUpperCase());

console.log(newCountries2); // ["FINLAND", "ESTONIA", "SWEDEN", "NORWAY"]
