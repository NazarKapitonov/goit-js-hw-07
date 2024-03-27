const input = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");
input.addEventListener("input", (event) =>
  input.value.trim() === ""
    ? (output.textContent = "Anonymous")
    : (output.textContent = event.currentTarget.value.trim())
);
