// DESAFIO 1
// Faça o download de outro projeto clicando neste link e abra no Visual Studio Code.
// git clone -b desafio_1 https://github.com/alura-cursos/js-curso-2.git

// DESAFIO 2
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio.';

// DESAFIO 3
function verificarChute(){
    console.log('O botão foi clicado');
}

// DESAFIO 4
function declaracaoAmor(){
    alert('Eu amo JS');
}

// DESAFIO 5
function perguntarCidade(){
    let nomeCidade = prompt('Qual o nome da cidade brasileira?');
    alert(`Estive em ${nomeCidade} e lembrei de você`);
}

// DESAFIO 6
function realizarSoma(){
    let num1 = parseInt(prompt('Digite o primeiro valor'));
    let num2 = parseInt(prompt('Digite o segundo valor'));
    let soma = num1 + num2;
    alert(`O resultado da soma foi: ${soma}`);
}