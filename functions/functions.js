/* 
Exercicio: 1;
Calcule a porcentagementre 2 números.
Exemplo: 25% de 40 é 10.
Formula da porcentagem: (y / x) * 100
uso da função:
 */

function calcPct(x, y) {
    let pct = (y / x) * 100;
    return pct;
}

let x = 87790;
let y = 10;
let pct = calcPct(x, y);
// console.log(`${pct}% de ${x} é ${y}`);

// Na função acima é pego somente quantos porcento de um número é necessário para tem o número 10.


/* ------------------------------------------------------------------------------- */


/* 
Exercicio: 2;
Calcule o preço do imovel
- m2 = 3.000
- Se tiver 1 quarto , o m2 é 1x. 
- Se tiver 2 quarto , o m2 é 1.2x. 
- Se tiver 3 quarto , o m2 é 1.5x. 
Uso da função:
*/

function calcularImovel(metragem, quartos) {
    let m2 = 3000;
    let preco = 0;

    switch (quartos) {
        case 1:
        default:
            preco = metragem * m2;
            break;
        case 2:
            preco = metragem * (m2 * 1.2)
            break;
        case 3:
            preco = metragem * (m2 * 1.5);
            break;
    }

    return preco;
}

let metragem = 123;
let quartos = 2;
let preco = calcularImovel(metragem, quartos);
// console.log(` O casa custa R$ ${preco}`)

// na função aima calcula o valor de uma casa dependendo da quantidade de quartos.


/* ------------------------------------------------------------------------------- */


// Exercicio: 3;
// Crie uma função que valide usuario e senha.

// function validar (usuario, senha) {
//     login = (usuario === 'gabriel' && senha === '123') && true;
//     return login;
// };  

// const validar = () =>{ 
//     login = (usuario === 'gabriel' && senha === '123') && true;
//     return login;
// }

const validar = () => login = (usuario === 'gabriel' && senha === '123') && true;

let usuario = 'gabriel';
let senha = '123';
let validacao = validar(usuario, senha);

if (validacao) {
    // console.log('Acesso Concedido!');
} else {
    // console.log('Acesso Negado!');
}

// Na função acima é realizado a verificação de acesso do usuario em três formas diferentes de criar uma função.


/* ------------------------------------------------------------------------------- */


