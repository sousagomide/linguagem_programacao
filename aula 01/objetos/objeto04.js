class A {

    #num

    constructor(num) {
        this.#num = num
    }

    metodoPublico() {
        console.log('Esse método é público')
    }

    #metodoPrivado() {
        console.log('Esse método é privado')
    }

    metodoTeste() {
        console.log('Estou chamando o método privado')
        this.#metodoPrivado()
    }

}

// ##################################################

const teste = new A(45)
console.log(teste.num)
teste.metodoPublico()
teste.metodoTeste()
