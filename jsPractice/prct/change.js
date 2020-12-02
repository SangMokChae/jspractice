const title = document.querySelector("h1");

const CHANGED_COLOR = "gold";
const BASIC_COLOR = "tomato;"

function overMouse(event) {
  title.innerHTML = "changed Title";
  title.style.color = "tomato";
}

function leaveMouse(event) {
  title.innerHTML = "where are you going?";
  title.style.color = "teal";
}

function clickedTitle() {
  const currentColor = title.style.color;
  if (currentColor === BASIC_COLOR) {
    title.style.color = BASIC_COLOR;
  } else {
    title.style.color = CHANGED_COLOR;
  }
}

function resizingPage(event) {
  title.innerHTML = "changing screen";
  title.style.color = "red";
}

function onRihgtClick() {
  title.innerHTML = "why clicked right?";
  title.style.color = "gray";
}

function init() {
  title.addEventListener("mouseover", overMouse);
  title.addEventListener("mouseleave", leaveMouse);
  title.addEventListener("click", clickedTitle);
  window.addEventListener("resize", resizingPage);
  window.addEventListener("contextmenu", onRihgtClick);
}

init();