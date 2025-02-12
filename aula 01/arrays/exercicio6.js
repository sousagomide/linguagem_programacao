const array = []

for(let i = 0; i < 10; i++)
    array.push(Math.floor(Math.random() * 30) + 1)

console.log(array)

const saida = array.map((value) => (value % 2 == 0) ? value/2 : value*2)

console.log(saida)