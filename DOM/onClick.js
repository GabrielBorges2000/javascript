// Manipulação de elementos na minhas tela (DOM)
//Eventos na tela:

//Nos meus eventos eu posso colocar JavaScript.
//Exemplo:

// para adicionar um evento nós selecionamos o elemento e depois utilizamos o
// addEventListener('click', teste)// passando o tipo de evento e em seguida o nome da minha função sem o parenteses
// para adicionar um evento nós podemos fazer de varias formas diferente, passando o tipo de evento e nome da função, criar uma função dentro do evento sejá ela uma função normal ou uma arrow function.
/* ------------------------------------------------------------------------------- */

// evento de onClick

 
// onClick = "teste" // ao clicar com o mouser irá executar a função colocada na minha tag utilizando a propriedade onClick.

function teste() {
    console.log('funcionando');
}

// como definir utilizando javascript e forma diferentede se fazer?

let button = document.querySelector('#button').addEventListener('click', teste);

// Outras formas de se fazer, basta apenas colocar o nome da variavel que eu salvei e realizar o evento.

// button.addEventListener('click', () => prompt('olá!'));

// button.addEventListener('click', function () {
//     alert('Bem vindo de volta!')
// });


/* ------------------------------------------------------------------------------- */