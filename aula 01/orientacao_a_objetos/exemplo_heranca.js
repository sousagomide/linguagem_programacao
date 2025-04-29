class Conta {

    constructor(numero, saldo) {
        this.numero = numero
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor
    }

    sacar(valor) {
        if(valor < this.saldo)
            this.saldo -= valor
    }

}

class ContaCorrente extends Conta {

    constructor(numero, saldo, limite) {
        super(numero, saldo)
        this.limite = limite
    }

    sacar(valor) {
        if(valor < this.saldo + this.limite)
            this.saldo -= valor
    }

}

class ContaPoupanca extends Conta {

    renderJuros(taxa) {
        this.saldo += this.saldo * taxa 
    }

}

// Testando as classes

const cc = new ContaCorrente('45820-9', 5000, 1000)
const cp = new ContaPoupanca('78595-8', 0)

console.log(cc.saldo) // 5000
cc.depositar(200)
console.log(cc.saldo) // 5200
cc.sacar(6000)
console.log(cc.saldo) // -800
cc.sacar(300)
console.log(cc.saldo) // -800
cp.depositar(200)
console.log(cp.saldo) // 200
cp.renderJuros(0.01)
console.log(cp.saldo) // 202
