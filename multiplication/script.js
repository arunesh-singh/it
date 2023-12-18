/* 4. Create an HTML page with the sole purpose to show multiplication tables of 2 to 10 (row-wise) created by JavaScript. Initially, the page is blank. With help of setInterval function print a row every 5 seconds in different colors and increasing font size. Use clearInterval() function to stop the given task. */

const table = document.querySelector(".table");

function tableOf2(i) {
  const tableRow = document.createElement("li");
  tableRow.innerHTML = `2 * ${i} = ${2 * i}`;
  tableRow.style.color = `rgb(${100 + i * 20}, ${100}, ${100})`;
  tableRow.style.fontSize = `${14 + i * 5}px`;
  table.appendChild(tableRow);
}

i = 1;
let timer = setInterval(() => tableOf2(i++), 1000);
setTimeout(() => clearInterval(timer), 10000);

console.log(table.childNodes);
