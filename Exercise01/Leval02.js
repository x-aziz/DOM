// ### **Exercise: Level 3**
// ### **DOM: Mini project 1**
// 1. Develop the following application, use the following HTML elements to get started with.
//  You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.
//     - The h1 color is changing every 1 second
//     - Completed challenge has background green
//     - Ongoing challenge has background yellow
//     - Coming challenges have background red
let h1 = document.querySelector("h1");
// for (let i = 0; i < 1000; i++) {
//   setInterval(function () {
//     h1.style.color = "red";
//   }, 100);
//   setInterval(function () {
//     h1.style.color = "green";
//   }, 200);
//   setInterval(function () {
//     h1.style.color = "yellow";
//   }, 300);
//   setInterval(function () {
//     h1.style.color = "blue";
//   }, 400);
//   setInterval(function () {
//     h1.style.color = "gray";
//   }, 400);
//   setInterval(function () {
//     h1.style.color = "white";
//   }, 400);
//   setInterval(function () {
//     h1.style.color = "#eee";
//   }, 400);
// }
let changeColor = () => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  h1.style.color = `#${randomColor}`;
};
setInterval(changeColor, 1000);
window.addEventListener('DOMContentLoaded', (event) => {
  const challenges = document.querySelectorAll('.wrapper li');
challenges.forEach(challenge => {
      const status = challenge.className;
      switch (status) {
          case 'Completed':
              challenge.style.backgroundColor = 'green';
              break;
          case 'Ongoing':
              challenge.style.backgroundColor = 'yellow';
              break;
          case 'Coming':
              challenge.style.backgroundColor = 'red';
              break;
      }
  });
});
