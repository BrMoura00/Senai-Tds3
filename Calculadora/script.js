const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.innerText === '=') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Erro';
      }
    } else if (button.innerText === 'C') {
      display.value = '';
    } else {
      display.value += button.innerText;
    }
  });
});