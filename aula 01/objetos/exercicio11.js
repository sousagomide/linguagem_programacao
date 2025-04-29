class Ajustar {

    formatarHora() {
        if(arguments.length == 1)
            return `${this.duasCasas(arguments[0])}:00:00`
        else if(arguments.length == 2)
            return `${this.duasCasas(arguments[0])}:${this.duasCasas(arguments[1])}:00`
        else if(arguments.length == 3)
            return `${this.duasCasas(arguments[0])}:${this.duasCasas(arguments[1])}:${this.duasCasas(arguments[2])}`
    }


    duasCasas(num) {
        return (num < 10 ? '0'+num : num)
    }

}

const timer = new Ajustar()
console.log(timer.formatarHora(2))
console.log(timer.formatarHora(15, 4))
console.log(timer.formatarHora(19, 21, 45))
console.log(timer.formatarHora())