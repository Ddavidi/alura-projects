// DESAFIO 1
function calculaIMC(altura, peso){
    return peso/(altura*altura);
}

console.log(calculaIMC(1.70, 61,5));


// DESAFIO 2
function calculaFatorial(valor){
    if(valor == 0) 
        return 1;
    else {
        return valor * calculaFatorial(valor-1);
    }
}

console.log(calculaFatorial(3));


// DESAFIO 3
function converteParaDolar(valor) {
    return valor * 4.80;
}

console.log(converteParaDolar(2));


// DESAFIO 4
function calculaPerimetro(altura, largura){
    return altura*2 + largura*2;
}

console.log(calculaPerimetro(2, 3));


// DESAFIO 5
function calculaPerimtroCircular(raio){
    return 2* 3.14 * raio;
}

console.log(calculaPerimtroCircular(3));


// DESAFIO 6
function mostraTabuada(valor){
    for(let i=1; i<=10; i++){
        console.log(valor*i);
    }
}

mostraTabuada(7);