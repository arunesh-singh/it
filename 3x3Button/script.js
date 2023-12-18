const text = document.querySelector(".text");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const fontSize10 = document.querySelector(".fs-10");
const fontSize20 = document.querySelector(".fs-20");
const fontSize30 = document.querySelector(".fs-30");
const impact = document.querySelector(".impact");
const verdana = document.querySelector(".verdana");
const comic = document.querySelector(".comic");

red.addEventListener("click", () => {
  text.style.color = "red";
});

green.addEventListener("click", () => {
  text.style.color = "green";
});

blue.addEventListener("click", () => {
  text.style.color = "blue";
});

fontSize10.addEventListener("click", () => {
  text.style.fontSize = "10px";
});

fontSize20.addEventListener("click", () => {
  text.style.fontSize = "20px";
});

fontSize30.addEventListener("click", () => {
  text.style.fontSize = "30px";
});

impact.addEventListener("click", () => {
  text.style.fontFamily = "Impact";
});

verdana.addEventListener("click", () => {
  text.style.fontFamily = "Verdana";
});

comic.addEventListener("click", () => {
  text.style.fontFamily = "Comic Sans MS";
});
