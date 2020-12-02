const span = document.querySelector("span");

const SUBTEXT_CL = "subtext";

function handleColor() {
  span.classList.toggle(SUBTEXT_CL);
}

function init() {
  span.addEventListener("click", handleColor);
}
init();