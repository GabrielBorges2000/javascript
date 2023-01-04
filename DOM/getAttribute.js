// Como pegar atributos ou valores de um elemento
// Exemplo:

function input() {
    const input = document.querySelector('input');

    console.log(input.getAttribute('placeholder')) //Pega o valor dentro do meu elemento
    
    if(input.hasAttribute('placeholder')) { // hasAttribute verifica se existe essa propriedade
        console.log('true')
    } else {
        console.log(false)
    }

    input.setAttribute('placeholder', 'placeholder teste') // Adiciona uma propriedade ao meu elemento e o valor da propriedade
    
}