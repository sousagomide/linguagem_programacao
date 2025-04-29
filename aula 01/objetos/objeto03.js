class A {

    somar() {
        if(arguments.length == 1)
            return arguments[0]
        else if(arguments.length == 2) 
            return arguments[0] + arguments[1]
        else if(arguments.length == 3)
            return arguments[0] + arguments[1] + arguments[2]
    }

}

const teste = new A()
console.log(teste.somar(1))
console.log(teste.somar(1, 2))
console.log(teste.somar(1, 2, 3))
console.log(teste.somar(1, 2, 3, 4))