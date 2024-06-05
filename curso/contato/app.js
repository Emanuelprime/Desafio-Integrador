document.getElementById('toggle-button').addEventListener('click', function() {
    var stylesheet = document.getElementById('stylesheet');
    if (stylesheet.getAttribute('href') === 'styleBlack.css') {
        stylesheet.setAttribute('href', 'styleWhite.css');
    } else {
        stylesheet.setAttribute('href', 'styleBlack.css');
    }
});

const botaoAumentarFonte = document.getElementById('botao-aumentar-fonte');
const botaoDiminuirFonte = document.getElementById('botao-diminuir-fonte');

botaoAumentarFonte.addEventListener('click', () => {
  const fontSize = getComputedStyle(document.body).fontSize;
  const newSize = parseInt(fontSize) + 2; // Aumentar em 2px

  document.body.style.fontSize = `${newSize}px`;
});

botaoDiminuirFonte.addEventListener('click', () => {
  const fontSize = getComputedStyle(document.body).fontSize;
  const newSize = parseInt(fontSize) - 2; // Diminuir em 2px

  if (newSize >= 12) { // Limite mínimo de tamanho de fonte
    document.body.style.fontSize = `${newSize}px`;
  }
});