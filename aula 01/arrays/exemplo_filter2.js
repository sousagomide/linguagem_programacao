const array = [15, 6, 23, 26, 34, 33, 12, 7, 10, 12]

const saida = array.filter((value) => {
    if(value % 2 == 0)
        return true
})

// ou

const saida2 = array.filter((value) => value % 2 == 0)

console.log(array)
console.log(saida)
console.log(saida2)