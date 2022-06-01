const pixelBoard = document.querySelector("#pixel-board");
document.body.appendChild(pixelBoard);

const wrapper = document.querySelector(".wrapper");
wrapper.appendChild(pixelBoard);

/* Função que ira criar o quadros */
function pixel() {
  for (let index = 0; index < 30; index += 1) {
    const line = document.createElement("div"); // Criei 5 linhas no HTML
    line.className = "line";
    pixelBoard.appendChild(line);
    for (let i = 0; i < 50; i += 1) {
      const pixel = document.createElement("div");
      pixel.className = "pixel";
      line.appendChild(pixel);
    }
  }
}
pixel();

/* Função que ira selecionar a cor */

function colorSeletect() {
  let palletta = document.querySelector("#color-palette");
  palletta.addEventListener("click", function (event) {
    const itemSelected = document.querySelector(".selected");
    itemSelected.classList.remove("selected");
    if (event.target.className === "color") {
      event.target.className = "color selected";
    }
  });
}
colorSeletect();

function selectColor() {
  const select = document.querySelector(".select");
  const cssElement = window.getComputedStyle(select, null);
  const backgroundColor = cssElement.getPropertyValue("background-color");
  return backgroundColor;
}

const board = document.querySelector("#pixel-board");
const cores = document.querySelector("#color-palette");

function changeColor(event) {
  if (event.target.classList.contains("color")) {
    const oldColor = document.querySelector(".selected");
    oldColor.classList.remove("selected");
    event.target.classList.add("selected");
  }
}
cores.addEventListener("click", changeColor);

function clearBoard() {
  const buttomClear = document.querySelector("#clear-board");
  buttomClear.addEventListener("click", () => {
    pixelBoard.innerHTML = "";
    pixel();
  });
}
clearBoard();

function paintBackground({ target }) {
  console.log(target.className);
  if (target.style.backgroundColor !== "" && target.className === 'pixel' ) {
    target.style.backgroundColor = "";
  } else {
    const color = document.querySelector(".selected");
    const css = window
      .getComputedStyle(color)
      .getPropertyValue("background-color");
    target.style.backgroundColor = css;
  }
}

board.addEventListener('click', paintBackground)

const random = document.querySelector(".random");

console.log(random)

const allPixel = document.querySelectorAll(".pixel")


function randomColor() {
  return '#' + parseInt((Math.random() * 0xFFFFFF))
    .toString(16)
    .padStart(6, '0');
}

function randomPixel() {
  const allPixel = document.querySelectorAll(".pixel")

  allPixel.forEach((pixel) => {

    pixel.style.backgroundColor = randomColor();
  })
}

random.addEventListener('click', () => {
  console.log("ok")
  return randomPixel()
})
