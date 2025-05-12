class Pessoa {

    #nome
    #idade

    constructor(nome, idade) {
        this.#nome = nome
        this.#idade = idade
    }

    get nome() {
        return this.#nome
    }

    get idade() {
        return this.#idade
    }

    set idade(idade) {
        this.#idade = idade
    }

    fazerAniversario() {
        this.#idade++
    }

}

// ######################################

const p1 = new Pessoa('Denecley Alvim', 39)
console.log(`${p1.nome} tem ${p1.idade} anos`)
p1.fazerAniversario()
console.log(`${p1.nome} tem ${p1.idade} anos`)