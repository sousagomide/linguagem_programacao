//npm install prompt-sync

const prompt = require('prompt-sync')()

let lista = []
for(let i = 0; i < 5; i++)
    lista.push(prompt('Digite seu nome: '))
console.log(lista)