const three = document.querySelector("h3");
const inputField = document.querySelector("#color1");
const inputField2 = document.querySelector("#color2");
const body = document.getElementById("gradient");

// function applyGrad() {
//   body.style.background = `linear-gradient(to right, ${inputField.value}, ${inputField2.value})`;
//   three.textContent = body.style.background + ";";
// }

// inputField.addEventListener("input", applyGrad);
// inputField2.addEventListener("input", applyGrad);

function applyGrad() {
  body.style.background = `linear-gradient(to right, ${inputField.value}, ${inputField2.value})`;
  three.textContent = body.style.background + ";";
}

inputField.addEventListener("input", applyGrad);
inputField2.addEventListener("input", applyGrad);
