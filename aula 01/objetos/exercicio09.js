class Contador {

    num = 0

    zerar() {
        this.num = 0
    }

    incrementar() {
        this.num++
    }

    valor() {
        return this.num
    }

}

const c = new Contador()
console.log(c.valor())
c.incrementar()
c.incrementar()
console.log(c.valor())