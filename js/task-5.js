function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const button = document.querySelector("button.change-color");
const spanColor = document.querySelector("span.color");

function changeColor(event) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanColor.textContent = color;
}

button.addEventListener("click", changeColor);
