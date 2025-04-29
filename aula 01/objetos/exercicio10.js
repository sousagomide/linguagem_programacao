class Reta {

    constructor(x1, y1, x2, y2) {
        if(arguments.length === 4) {
            this.a = (y2 - y1) / (x2 - x1)
            this.b = y1 - this.a * x1
            this.x1 = x1
            this.y1 = y1
        }
        
    }

    coeficientes() {
        return [this.a, this.b]
    }

    ponto_pertence(x, y) {
        return ((this.a * x) - y + this.b) == 0
    }

    representacao() {
        return `y = ${this.a}x + ${this.b}`
    }

    intersecao(x1, y1, x2, y2) {
        const a2 = (y2 - y1) / (x2 - x1)
        const b2 = y1 - a2 * x1
        const d = this.a * b2 - a2 * this.b
        if(d == 0)
            return null
        const c1 = this.a * this.x1 + this.b * this.y1
        const c2 = a2 * x1 + b2 * y1
        return [(c1*b2-c2*this.b)/d, (this.a*c2-a2*c1)/d]
    }

}

const r = new Reta(2, 5)
console.log(r.coeficientes())
console.log(r.ponto_pertence(4, 13))
console.log(r.ponto_pertence(3, 13))
console.log(r.representacao())