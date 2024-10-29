// function with multiple parameters
function functionName(...args) {
  //code goes here
}

// a callback function, the function could be any name
const callback = (n) => {
  return n ** 2;
};
// function take other function as a callback
function cube(callback, n) {
  return callback(n) * n;
}
console.log(cube(callback, 3));
// Higher order function returning an other function
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };
  return doSomething;
};
console.log(higherOrder(2)(3)(10));

// Let us see were we use call back functions.For instance the forEach method uses call back.
const numbers = [1, 2, 3, 4];
const sumArray = (arr) => {
  let sum = 0;
  const callback = function (element) {
    sum += element;
  };
  arr.forEach(callback);
  return sum;
};
console.log(sumArray(numbers));

// syntax
function callback() {
  // code goes here
}
setInterval(callback, duration);
// syntax
function callback() {
  // code goes here
}
setTimeout(callback, duration); // duration in milliseconds
function sayHello() {
  console.log('Hello')
}
setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.
