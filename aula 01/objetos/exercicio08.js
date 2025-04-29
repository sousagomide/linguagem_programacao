const data = {
    dia: 0,
    mes: 0,
    ano: 0,
    formatar: function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

data.dia = 24
data.mes = 2
data.ano = 2025
console.log(data.formatar())