'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

// Metodo "Toggle" para alterar para a classe 'dark-theme'

var className = document.body.className;
if (className == "light-theme") {
    this.textContent = "Dark";
}
else {
    this.textContent = "Light";
}

console.log(className);

//If Else usado para alterar o nome do botão

});