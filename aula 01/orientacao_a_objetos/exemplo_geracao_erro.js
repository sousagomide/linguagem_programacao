class NotaInvalidaError extends Error {
    constructor(msg) {
        super(msg)
        this.name = 'NotaInvalidaError'
    }
}

class AulaNaoEncontradaError extends Error {
    constructor(aulaId) {
        super(`Aula com ID ${aulaId} não encontrado.`)
        this.name = 'AulaNaoEncontradaError'
    }
}

const bancoAulas = {
    1: {titulo: 'Biologia', notas: []},
    2: {titulo: 'Linguagem de Programação', notas: []},
    3: {titulo: 'Geografia', notas: []}
}

function add(aulaId, nota) {
    const aula = bancoAulas[aulaId]
    if(!aula)
        throw new AulaNaoEncontradaError(aulaId)
    if(nota < 0 || nota > 10)
        throw new NotaInvalidaError('A nota deve ser um número entre 0 - 10')
    aula.notas.push(nota)
}

// ############## Principal ##############
try {
    add(1, 5.6)
    add(3, 6.3)
    console.log(bancoAulas)
    add(5, 9.8)
} catch(error) {
    if(error instanceof NotaInvalidaError)
        console.log(`Erro de nota: ${error.message}`)
    else if(error instanceof AulaNaoEncontradaError)
        console.log(`Erro de aula: ${error.message}`)
}