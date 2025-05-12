class Pessoa {

    static nome = 'Nanaxara'
    sobrenome

    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

}

const p = new Pessoa('Denecley', 'Alvim')
console.log(Pessoa.nome)
console.log(p.nome)
console.log(p.sobrenome)