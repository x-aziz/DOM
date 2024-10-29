// ### **Exercise: Level 1**
// 2. Get the first paragraph by using document.querySelector(tagname) and tag name
let paragraph1 = document.querySelector("p");

// 3. Get each of the paragraphs using document.querySelector('#id') and by their id
let paragraph2 = document.querySelector("#p2");
let paragraph3 = document.querySelector("#p3");
let paragraph4 = document.querySelector("#p4");

// 4. Get all the p elements as a nodeList using document.querySelectorAll(tagname) and by their tag name
let listP = document.querySelectorAll("p");

// 5. Loop through the nodeList and set the text content of each paragraph to "said"
listP.forEach((p) => {
  p.textContent = "said";
});

// 6. Set a text content to the fourth paragraph, "Fourth Paragraph"
paragraph4.textContent = "Fourth Paragraph";

// 7. Set id and class attributes for all the paragraphs using different attribute setting methods
parags = document.getElementsByTagName("p");
for (let i = 0; i < parags.length; i++) {
  parags[i].classList.add(`index${i}`);
  parags[i].id = `index${i}`;
}
// ### **Exercise: Level 2**
// 1. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
listP.forEach((i) => {
  i.style.color = "blue";
  i.style.background = "red";
  i.style.border = "2px solid black";
  i.style.fontSize = "30px";
  i.style.fontFamily = "Kumbh Sans, sans-serif";
  i.style.fontWeight = "bolder";
});
// 2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
const paragraphs = document.querySelectorAll("p");
// Loop through each paragraph
paragraphs.forEach((paragraph, index) => {
  // Check the index to determine the color
  if (index === 0 || index === 2) {
    // First and third paragraphs are green
    paragraph.style.color = "green";
  } else {
    // Second and fourth paragraphs are red
    paragraph.style.color = "white";
  }
});kl
// 1. Set text content, id and class to each paragraph
// const list2P = document.querySelectorAll('p');
for (let i = 0; i < listP.length; i++) {
  switch (i) {
    case 0:
      listP[i].classList.add("samy");
      break;
    case 1:
      listP[i].classList.add("lina");
      listP[i].id = "p2";
      break;
    case 2:
      listP[i].classList.add("yacin");
      listP[i].id = "p3";
      break;
    case 3:
      listP[i].classList.add("akram");
      listP[i].id = "p4";
      break;
    default:
      break;
  }
}

