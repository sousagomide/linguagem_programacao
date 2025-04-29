class Pagamento {
    processar(valor) {
        console.log(`Processando o pagamento no valor de R$ ${valor}`)
    }
}

class CartaoCredito extends Pagamento {
    processar(valor) {
        console.log(`Pagamento no Cartão de Credito no valor de R$ ${valor}`)
    }
}

class Boleto extends Pagamento {
    processar(valor) {
        console.log(`Pagamento no Boleto no valor de R$ ${valor}`)
    }
}

class Pix extends Pagamento {
    processar(valor) {
        console.log(`Pagamento no Pix no valor de R$ ${valor}`)
    }
}

// ################################################################

new CartaoCredito().processar(100)
new Boleto().processar(200)
new Pix().processar(300)