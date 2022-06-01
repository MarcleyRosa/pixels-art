const corpo = document.querySelector('header');
const crSection = document.createElement('section');
crSection.id = 'pixel-board';

const makeButton = document.createElement('button');
makeButton.id = 'clear-board';
makeButton.innerText = 'Limpar';

const divButton = document.createElement('div');
corpo.appendChild(divButton);

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

for (let i = 1; i <= 5; i += 1) {
  makeDivLine();
  for (let index = 1; index <= 5; index += 1) {
    makeDiv();
  }
}

const elColor = document.getElementById('color-palette');
elColor.addEventListener('click', function(e) {
  document.querySelector('.selected').classList.remove('selected');
  e.target.classList.add('selected');
});

const selectedPixel = document.querySelector('#pixel-board');
selectedPixel.addEventListener('click', function(ev) {
  const selectCor = window.getComputedStyle(document.querySelector('.selected')).backgroundColor
  ev.target.style.backgroundColor = selectCor;
});