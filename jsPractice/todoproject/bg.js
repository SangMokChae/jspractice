const body = document.querySelector("body");

const IMG_SCREEN = 5;

function shootBg(imgNumber) {
  const img = new Image();
  img.src = `images/${imgNumber + 1}.jpg`;
  img.classList.add("bgImage");
  body.appendChild(img);
}

function showRandomBg() {
  const num = Math.floor(Math.random() * IMG_SCREEN);
  return num;
}

function init() {
  const randomNum = showRandomBg();
  shootBg(randomNum);
}

init();