const carro = {
    cor: 'Vermelho',
    velocidade: 0.0,
    marca: 'FIAT',
    modelo: 'UNO',
    acelerar: function() {
        this.velocidade += 10
    },
    frear: function() {
        this.velocidade -= 10
    }
}

console.log(`${carro.marca} - ${carro.modelo}`)
console.log(carro.velocidade)
carro.acelerar()
console.log(carro.velocidade)
