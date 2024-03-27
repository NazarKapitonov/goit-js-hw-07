function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlBox = document.querySelector("div#controls");
const divBoxes = document.querySelector("div#boxes");
const input = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");

let msgBox = document.createElement("p");
controlBox.prepend(msgBox);
msgBox.style.position = "absolute";
msgBox.style.color = "red";
msgBox.style.padding = "2px 4px";
msgBox.style.top = "130%";
msgBox.style.borderRadius = "5px";
msgBox.style.fontSize = "14px";
msgBox.style.backgroundColor = "LightGray";
msgBox.style.display = "none";

msgBox.textContent = "Wrong value, please type number from 1 to 100";

controlBox.style.position = "relative";

msgBox = document.querySelector("div#controls p");

function createBoxes(event) {
  let inputValue = Number(input.value);
  divBoxes.innerHTML = "";
  console.log(inputValue);
  if (inputValue > 0 && inputValue < 101 && typeof inputValue === "number") {
    for (let index = 0; index < inputValue; index++) {
      msgBox.style.display = "none";
      divBoxes.append(document.createElement("div"));
      divBoxes.lastChild.style.backgroundColor = getRandomHexColor();
      divBoxes.lastChild.style.width = `${30 + index * 10}px`;
      divBoxes.lastChild.style.height = `${30 + index * 10}px`;
    }
    input.value = "";
  } else {
    msgBox.style.display = "block";
    input.value = "";
  }
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);
