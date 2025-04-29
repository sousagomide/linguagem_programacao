const carro = {
    cor: 'Vermelho',
    velocidade: 0.0,
    marca: 'FIAT',
    modelo: 'UNO',
    acelerar: function(carro) {
        carro.velocidade += 10
    },
    frear: function(carro) {
        carro.velocidade -= 10
    }
}

console.log(`${carro.marca} - ${carro.modelo}`)
console.log(carro.velocidade)
carro.acelerar(carro)
console.log(carro.velocidade)
