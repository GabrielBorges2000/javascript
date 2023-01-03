// Manipulação de elementos na minhas tela (DOM)
//Formas de Seleção:

document.getElementsByTagName('h1') // Utilizadamos para selecionar um elemento através da tag, mas podemos armazenar essa informação em uma variavel para poder pegar depois caso seja necessário!
//Exemplo:
let elementTagName = document.getElementsByTagName('h1')

/* ------------------------------------------------------------------------------- */

document.getElementsByClassName('teste') // Utilizadamos para selecionar um elemento através da class, mas podemos armazenar essa informação em uma variavel para poder pegar depois caso seja necessário!

let elementClass = document.getElementsByClassName('teste')

/* ------------------------------------------------------------------------------- */

document.getElementById('teste') // Utilizadamos para selecionar um elemento através do id, mas podemos armazenar essa informação em uma variavel para poder pegar depois caso seja necessário!
let elementId = document.getElementById('teste')

/* ------------------------------------------------------------------------------- */

document.querySelector('div') // Utilizadamos para selecionar um elemento através do id, class ou tag. Essa forma de seleção é semelhante ao css. Podemos armazenar essa informação em uma variavel para poder pegar depois caso seja necessário!

document.querySelector('.teste')
document.querySelector('#teste')
document.querySelector('div')

// Podemos utizar cascata, porém só pega o primeiro elemento.
document.querySelector('div ul li')
//Seleciona somente um elemento da mesma class, id ou tag.

/* ------------------------------------------------------------------------------- */

document.querySelectorAll('div') // Utilizadamos para selecionar varios elementos através do id, class ou tag. Essa forma de seleção é semelhante ao css. Podemos armazenar essa informação em uma variavel para poder pegar depois caso seja necessário!

document.querySelectorAll('.teste')
document.querySelectorAll('#teste')
document.querySelectorAll('div')

// Podemos utizar cascata

document.querySelectorAll('div ul li')

//Seleciona somente varios elemento da mesma class, id ou tag.

/* ------------------------------------------------------------------------------- */


