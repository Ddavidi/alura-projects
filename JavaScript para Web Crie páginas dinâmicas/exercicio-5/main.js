const listaDeBotoes = document.querySelectorAll('input[type="button"]');

for(let contador=0; contador<listaDeBotoes.length; contador++){
    const botao = listaDeBotoes[contador];

    // EXERCICIO 2
    botao.onmouseup = function () {
        botao.classList.remove('ativa');
    }

    // EXERCICIO 1
    botao.onmousedown = function () {
        botao.classList.add('ativa');
    }

}