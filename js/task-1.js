const list = document.querySelector("ul#categories");
const items = document.querySelectorAll("ul#categories li.item");
const title = document.querySelectorAll("h2");
const elements = document.querySelectorAll("li.item ul");

console.log(`Number of categories: ${items.length}`);
for (let index = 0; index < items.length; index++) {
  console.log(`Category: ${title[index].textContent}`);
  console.log(`Elements: ${elements[index].childElementCount}`);
}
