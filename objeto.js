// Introdução aos objetos

// O objeto vai ser composto por uma variável que irá passar valores dentro das chaves, esses valores serão as caracteristicas do meu objeto.

// Exemplo: 1.
const personagem = {
    name: 'Gabriel',
    age: '22',
    color: 'Azul',
    olhos: ['castanho'],
    habilidades: {
        primary: 'css',
        2: 'html',
        3: 'React',
        4: 'JavaScript',
    },
    caracteristicas: {
        forca: 20,
        magia: 15,
        estamina: 100
    }
}

// console.log(
//     `Meu nome é ${personagem.name}, tenho ${personagem.age} anos e a minha cor preferida é ${personagem.color}.`
// );

//como mexer em um valor do meu objeto?
personagem.name = 'Sr. Borges'; // só objeto

personagem.olhos.push('Castanho Claro') // => com array dentro do objeto

personagem.caracteristicas.forca += 5;
// console.log(`Força: ${personagem.caracteristicas.forca} `)
// console.log(`olhos: ${personagem.olhos[1]}`)


/* ------------------------------------------------------------------------------- */
