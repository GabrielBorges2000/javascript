// introdução a function de Array
// A seguir teremos funções que podemos utilizar com arrays que já vem configuradas com javascript e que são as mais utilizadas


let fruits = ['Maça', 'Melância', 'Uva', 'Laranja', 'Banana'];

// console.log(fruits.length) // => .length() => saber a quantidade de itens que o meu arrasy tem

// fruits.push('Kiwi'); // => Adicional algo no array

// fruits.pop(); // => deleta o ÚLTIMO item do array
// fruits.shift(); // => deleta o PRIMIERO item do array

// console.log(fruits.join(', ')); // => adiciona algo dentro de todos os meus arrays, mostrando apenas o conteudo, no exmplo acima eu coloquei uma virgula.

// fruits[0] = 'pêra'; // => set um novo valor para a possição que a minha string estiver no array

// fruits[fruits.length - 1] = 'pêra'; // => o fruits.length remove o último item do meu array e depois eu adiciono um novo item no final da minha array ou usar as seguintes funções para realizar a mesma função

// fruits.pop();
// fruits.push('Kiwi');

// fruits.sort(); // => coloca em ordem alfabetica (A - Z)
// fruits.sort().reverse(); // => reverte a ordem alfabetica (Z - A) - O comando reverse, reverte todas as coisas

// console.log(fruits)


/* ------------------------------------------------------------------------------- */

// Como ordenar a minha lista baseada na propriedade que eu quiser? aqui entra o conceito de filtro para utilizar em apps.

let cars = [
    { brand: 'Fiat', year: 2022 },
    { brand: 'BMW', year: 2018 },
    { brand: 'Ferrari', year: 2020 }

];

// cars.sort((a, b) => {
//     if( a.year > b.year){
//         return 1;
//     } else if (a.year < b.year) {
//         return -1;
//     } else {
//         return 0;
//     }
// }); // => lógica avançada descritiva

// cars.sort((a, b) => {
//     if (a.year > b.year) {
//         return 1;
//     } else  {
//         return -1;
//     }
// }); //=> lógica básica descritiva

// cars.sort((a, b) => {
//     return a.year - b.year;
// }); // => forma simplificada

// cars.sort((a, b) => a.year - b.year); // => Forma mais simplificada ainda


// cars.sort((a, b) => b.year - a.year); // => caso eu queira reveter a sequência, basta colocar o inverso dos parametros

// console.log(cars)

/* ------------------------------------------------------------------------------- */

// como fazer um filtro que apareça as frutas que tenha mais de 4 letras?

let filterFruitas = fruits.filter((item) => {
    if (item.length > 4) {
        true
    } else {
        false
    }
}); // => lógica mais descritiva


let filterFruits = fruits.filter((item) => item.length > 4); // => Forma mais simplificada - filter serve para filtar algo apartir do seu valor;

console.log(filterFruits)

let ok = fruits.every((value) => value.length > 3); // every verifica se todos os itens tem a minha validação

let okay = fruits.some((value) => value.length > 3); // some verifica se pelo menos 1 item tem a minha verificação

if (ok, okay) {
    console.log('maiores que 3')
} else {
    console.log('menor que 3')
}

/* ------------------------------------------------------------------------------- */

// como verificar por um item de texto especifico, por exemplo se eu escrever 'uva' na pesquisa?

let searchFruits = fruits.includes('Uva')

if (fruits.includes('Uva')) {
    console.log('Tem Uva sim...')
} else {
    console.log('Não tem Uva...')
}


