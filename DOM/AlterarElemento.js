// function elements() {
//     const element = document.querySelector('.div')
//     const ul = element.querySelector('ul')

//     console.log(ul.outerHTML) // para mostrar o conteudo do HTML
//     console.log(ul.outerText) // para mostar o conteudo da tag
//     ul.outerHTML = '<li> item alterado</li>' // troca o elemento inteiro da minha tela.
//     ul.innerText = '<li> item alterado</li>' // Alterar o texto da minha tag
//     ul.innerHTML = '<li> item alterado</li>' // altera a minha primeira tag
//     ul.innerHTML = ul.innerHTML + '<li> item alterado</li>'
//     ul.innerHTML += '<li> item alterado</li>'
//     ul.children[0].innerHTML = 'item <strong>alterado</strong>'// altera o HTMl e o filho, para seleciona o filho fazemos como os arrays

//     // o innerHTML é uma forma de alterar um elemento dentro do meu documento.

//     console.log(element.children);
//     console.log(element.children[0].children);
//     console.log(element.children[1].children);

// }

/* ------------------------------------------------------------------------------- */

// Uma maneira melhor de manipular a DOM

// function elements() {
//     const element = document.querySelector('.div')
//     const ul = element.querySelector('ul')
//     const newLi = document.createElement('li')
//     newLi.innerText = 'item adicionado'

//     // como adicionar um texto dentro do elemento
//     ul.children[0].append('(alterado)') // append adicionar um elemento dentro de um elemento já existente
//     ul.append('<h1>teste</h1>') // append serve para adicionar somente texto
//     ul.appendChild(newLi) // o appendChild um texto na tela e cria o elemento que precisa

//     // Todo append coloco o meu texto no final, mas existe uma propriedade que colcoa meu texto no começo.

//     ul.prepend(newLi) // adiciona o item no começo da minha lista
// }

/* ------------------------------------------------------------------------------- */

// Adiconando coisas em volta do nosso elemento 

function elements() {
    const element = document.querySelector('.div');
    const ul = element.querySelector('ul');

    // ul.before('texto qualquer');
    // ul.after('texto qualquer');

    // after = depois
    // before = antes

    // para adicionar um elemento nós devemos criar ele e depois jogar ele em TextTrackList. 

    // const newButton = document.createElement('button');
    // newButton.innerHTML = 'botão';

    let newUl = document.createElement('ul');
    
    for (let n = 0; n < 5; n++) {
        let x = n + 1
        const newLi = document.createElement('li');
        newLi.innerHTML = ` item add ${x}`;
        newUl.append(newLi);      
    }

    ul.after(newUl);


    // for (let n = 0; n < 5; n++) {
    //     let newLi = document.createElement('li');
    //     newLi.innerHTML = "item add" + n;
    //     newUl.append(newli);
    // }

    // ul.before(newUl);
    

}

