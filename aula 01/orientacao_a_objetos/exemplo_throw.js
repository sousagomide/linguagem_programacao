class Aluno {

    constructor(notas, situacao) {
        this.notas = notas
        this.situacao = situacao
    }

    #media() {
        return this.notas.reduce((acc, e) => acc + e) / this.notas.length
    }

    caso() {
        const m = this.#media()
        const real = (m >= 6 ? 'APROVADO' : (m >= 3 && m < 6 ? 'RECUPERACAO' : 'REPROVADO'))
        if(real != this.situacao)
            throw new Error('A média não bate com a situação do aluno')
    }
}

const a1 = new Aluno([5.0, 6.8, 2.2], 'APROVADO')
try {
    a1.caso()
    console.log('Situação OK')
} catch(error) {
    console.log(`${error}`)
}