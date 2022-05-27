// for (let index = 0; index < 5; index += 1); {
//     const pixels = document.querySelector('div')
// }
const corpo = document.querySelector('header');
const crSection = document.createElement('section');
crSection.id = 'pixel-board';

corpo.appendChild(crSection);

function makeDiv () {
 const newDiv = document.createElement('div');
 newDiv.className = 'pixel';
 crSection.appendChild(newDiv)
}
function makeDivLine () {
    const newDiv = document.createElement('div');
    crSection.appendChild(newDiv)
   }

for (let i = 1; i <= 5; i += 1) {
    makeDivLine();
for (let index = 1; index <= 5; index += 1) {
  makeDiv();
}
}