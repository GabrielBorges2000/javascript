// Introdução a Array

let nome = [
    'gabriel',
    'thiago',
    'maria'
];
let color = [
    'blu',
    'green',
    'red',
    nome
];

// console.log(color[2])
// console.log(color[3][0])

// No exemplo acima é utilizado arrays, sendo possivel pegar somente array que e array dentro de array.


/* ------------------------------------------------------------------------------- */

// operações Básicas de array

let ingredientes = [
    'farinha de trigo',
    'açucar',
    'ovo',
    'manteiga',
    'leite',
    
]

// Como adicionar mais itens ao array de outra forma?

// ingredientes[5] = 'chocolate'

// ingredientes.push('chocolate')
// push sempre irá servir para incluir algo dentro de alguma coisa.


// .shift = função que remove o primeiro item do meu array.
// ingredientes.shift(ingredientes)

// .pop = função que remove o último item do meu array.
// ingredientes.pop(ingredientes)

// console.log(ingredientes)
// console.log(`Você irá precisar de apenas ${ingredientes.length} ingredientes para fazer um bolo muito gostoso!`)

/* ------------------------------------------------------------------------------- */


// Exercicio: 1;

//1:  No array abaixo , qual o número que pega a Ferrari?

let carros =['BMW', 'Ferrari', 'Mercedes'];
// console.log(`1. ${carros[1]}`);

//2:troque a Ferrari por Audi

carros[1] = 'Audi'
// console.log('2. lista com Audi:');
// console.log(carros);

//3. Adicione o Volvo a lista
carros.push('Volvo')
// console.log('3. lista com volvo:');
// console.log(carros);

//4. Exiba qunatos itens tem no array
// console.log('4. itens do array: ' + carros.length);


