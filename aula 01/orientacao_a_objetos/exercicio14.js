// Crie um programa em Javascript que receba n números aleatórios variando entre 0 a 9 e some esses números enquanto a soma não for 
// superior a 100. O valor deverá imprimir o valor somado (antes de atingir o número maior que 100) e deverá informar quantos números 
// foram somados e qual a média.
// a)	Utilize tratamento de exceção para lidar com a entrada igual a 0;
// b)	Quando a soma for superior a 100, o programa deverá gerar uma exceção criada pelo programador;

let soma = 0
let qtde = 0

console.log('Calculando...')
while(soma < 100) {
    try{
        const num = Math.floor(Math.random() * 10)
        if(num == 0) throw Error('Número igual a zero')
        if(soma + num < 100){
            soma += num
            qtde++
        }else{
            const erro = new Error('Soma maior que 100')
            erro.name = 'Maior'
            throw erro
        }
    }catch(error){
        console.log(error.message)
        if(error.name == 'Maior') break
    }
}
console.log(`Soma: ${soma}`)
console.log(`Quantidade de valores: ${qtde}`)
console.log(`Média: ${(soma/qtde).toFixed(2)}`)