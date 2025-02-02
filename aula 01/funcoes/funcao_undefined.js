function comRetorno() {
    return 'Bom dia'
}

function semRetorno() {
    console.log('Bom dia')
}

const saudacao2 = semRetorno()
const saudacao1 = comRetorno()

console.log(saudacao1, saudacao2)