const inputLetterText = document.getElementById('carta-texto');
const p = document.getElementById('carta-gerada');
const inputButton = document.getElementById('criar-carta');

function addPhrase() {
  if (inputLetterText.value === '' || inputLetterText.value === ' ') {
    p.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    p.innerText = '';
    const textValue = inputLetterText.value.split(' ');
    for (let index = 0; index < textValue.length; index += 1) {
      const span = document.createElement('span');
      span.innerHTML = textValue[index];
      p.appendChild(span);
    }
  }
}
inputButton.addEventListener('click', addPhrase);
