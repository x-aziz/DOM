const element = document.getElementById("my-box");
element.addEventListener("mouseover", function changeColor() {
  element.target.style.backgroundColor = "blue";
});
