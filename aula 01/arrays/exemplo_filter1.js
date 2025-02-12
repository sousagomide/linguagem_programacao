const array = [15, 6, 23, 26, 34, 33, 12, 7, 10, 12]

const filtro_function = (value, index, array) => {
    if(value % 2 == 0)
        return value
}

const saida = array.filter(filtro_function)

console.log(array)
console.log(saida)