const inputLetterText = document.getElementById('carta-texto');
const p = document.getElementById('carta-gerada');
const inputButton = document.getElementById('criar-carta');
const letterCounter = document.getElementById('carta-contador');

function addPhrase() {
  if (inputLetterText.value === '' || inputLetterText.value === ' ') {
    p.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    p.innerText = '';
    createElements();
  }

  function createElements() {
    const textValue = inputLetterText.value.split(' ');
    for (let index = 0; index < textValue.length; index += 1) {
      letterCounter.innerHTML = textValue.length;
      const span = document.createElement('span');
      span.innerHTML = textValue[index];
      p.appendChild(span);
      addClasses(span);
    }
  }
}
inputButton.addEventListener('click', addPhrase);

function addClasses(span) {
  span.classList.add(grupoEstilo[Math.round(Math.random() * 2)]);
  span.classList.add(grupoTamanho[Math.round(Math.random() * 2)]);
  span.classList.add(grupoRotacao[Math.round(Math.random() * 1)]);
  span.classList.add(grupoInclinacao[Math.round(Math.random() * 1)]);
}

let grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
let grupoTamanho = ['medium', 'big', 'reallybig'];
let grupoRotacao = ['rotateleft', 'rotateright'];
let grupoInclinacao = ['skewleft', 'skewright'];

p.addEventListener('click', changeStyle);
function changeStyle(event) {
  event.target.className = '';
  addClasses(event.target);
}
