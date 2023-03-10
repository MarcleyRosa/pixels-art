const corpo = document.querySelector('header');
const crSection = document.createElement('section');
crSection.id = 'pixel-board';

const makeButton = document.createElement('button');
makeButton.id = 'clear-board';
makeButton.innerText = 'Limpar';

const divButton = document.createElement('div');
corpo.appendChild(divButton);

function rgbColor() {
  const red = parseInt((Math.random() * 250), 10);
  const green = parseInt((Math.random() * 250), 10);
  const blue = parseInt((Math.random() * 250), 10);
  return `rgb(${red}, ${green}, ${blue})`;
}

const color2 = document.getElementById('cor2');
const color3 = document.getElementById('cor3');
const color4 = document.getElementById('cor4');

color2.style.backgroundColor = rgbColor();
color3.style.backgroundColor = rgbColor();
color4.style.backgroundColor = rgbColor();

function buttonDiv() {
  const allPixel = document.querySelectorAll('li');
  for (let i = 0; i < allPixel.length; i += 1) {
    allPixel[i].style.backgroundColor = 'white';
  }
}

makeButton.addEventListener('click', buttonDiv);
divButton.appendChild(makeButton);

corpo.appendChild(crSection);

function makeDiv() {
  const newDiv = document.createElement('li');
  newDiv.className = 'pixel';
  crSection.appendChild(newDiv);
}
function makeDivLine() {
  const newDiv = document.createElement('div');
  crSection.appendChild(newDiv);
}

function makeBorad(line, colum) {
  for (let i = 1; i <= line; i += 1) {
    makeDivLine();
    for (let index = 1; index <= colum; index += 1) {
      makeDiv();
    }
  }
}
makeBorad(5, 5);

const elColor = document.getElementById('color-palette');
elColor.addEventListener('click', (e) => {
  document.querySelector('.selected').classList.remove('selected');
  e.target.classList.add('selected');
});

const selectedPixel = document.querySelector('#pixel-board');
selectedPixel.addEventListener('click', (ev) => {
  const elem = ev;
  const selectCor = window.getComputedStyle(document.querySelector('.selected')).backgroundColor;
  elem.target.style.backgroundColor = selectCor;
});

const inputVqv = document.getElementById('board-size');
const buttonVqv = document.getElementById('generate-board');

// let inputValue = bords;

function minMax(bords) {
  if (bords < 5) return 5;
  if (bords > 50) return 50;
  return bords;
}
buttonVqv.addEventListener('click', () => {
  if (!inputVqv.value.length) {
    window.alert('Board inv??lido!');
  }

  const boardBgc = document.querySelectorAll('.pixel');
  const pixelBoard = document.getElementById('pixel-board');
  const bords = Number(inputVqv.value);
  if (Number(inputVqv.value) > 0) {
    for (let index = 0; index < boardBgc.length; index += 1) {
      pixelBoard.removeChild(boardBgc[index]);
    }
    const bod = minMax(bords);
    makeBorad(bod, bod);
  }
});
