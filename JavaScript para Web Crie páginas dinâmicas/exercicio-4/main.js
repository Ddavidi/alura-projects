// EXERCICIO 1
const botaoIncremento = document.querySelector('.botao');

let contador = 0;

botaoIncremento.onclick = function(){
    contador++;
    console.log(contador);
}


// EXERCICIO 2
const listaBotoes = document.querySelectorAll('.botao');
console.log(listaBotoes);


// EXERCICIO 3
let contador3 = 0;

function incrementaContador() {
    contador3++;
    console.log(contador3);
}

listaBotoes[3].onclick = incrementaContador;


// EXERCICIO 4
let  i = 0;

while(i < listaBotoes.length){
    listaBotoes[i].onclick = incrementaContador;
    i++;
}


// EXERCICIO 5
for(let j = 0; j < listaBotoes.length; j++){
    listaBotoes[j].onclick = incrementaContador;
}