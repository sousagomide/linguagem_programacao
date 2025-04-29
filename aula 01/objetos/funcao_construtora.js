function Data(dia, mes, ano){
    this.dia = dia
    this.mes = mes
    this.ano = ano
    this.formatar = function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const d1 = new Data(24, 2, 2025)
const d2 = new Data(29, 1, 2025)
console.log(d1.formatar())
console.log(d2.formatar())