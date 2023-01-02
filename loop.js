// introdução ao loop

// no meu for eu coloco de onde irá partir, logo em seguida eu coloco até onde ele deve ir, e coloco a condicional a ser executada

for (let n = 0; n <= 10; n++) {
    // console.log('Qualuqer Frase' + n)
}

// loop em array

// let ingredientes = [
//     'farinha de trigo',
//     'açucar',
//     'ovo',
//     'manteiga',
//     'leite',

// ]

for (let n = 0; n < ingredientes.length; n++) {
    // console.log(n + ingredientes[n]);
}

// no caso acima eu peguei o array de outro arquivo javascrip, já que o arquivo é executado e lido de cima para baixo, lá no meu index.html o arquivo loop.js está abaixo do script array.js.


// Mas a melhor forma de realizar lopp em um array é da seguinte forma:

for (let i in ingredientes) {
    // console.log(ingredientes[i]);
}

// ou 

for(food of ingredientes) {
    // console.log(food);
}

// Forma de acessa um objeto dentro do meu array:

cores = [
    { name: 'preto', qt: '10'},
    { name: 'azul', qt: '5'},
    { name: 'verde', qt: '12'}
]

for(cor of cores) {
    // console.log(`nome: ${cor.name} - qt: ${cor.qt}`);
    // console.log(`nome: ${cor.name} - qt: ${cor.qt}`.toUpperCase());
}


/* ------------------------------------------------------------------------------- */


// loop while

let number = 0;

while (number <= 10) {
    // console.log(`O número da vez é ${number}`);
    number ++;
}

// Atenção: O while deve-se tomar o cuidado para não lançar um lopp infinito e travar o computador!

// Mas o while e o for realizar a mesma coisa com o loop.

/* ------------------------------------------------------------------------------- */

// Exercicio: 1;

//1. Faça um loop que mostre todas as frutas
let frutas = ['maça', 'uva', 'Banana'];

for(let n = 0;n < frutas.length; n++) {
    // console.log(frutas[n]);
}

//2. Conte de 1 até 100 através de um while
let position = 1;

while (position <= 100) {
    // console.log(` sua posição é ${position}`);
    position ++;
}