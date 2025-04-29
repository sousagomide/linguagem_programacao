const aluno = {
    nome: 'Denecley Alvim',
    disciplinas: [
        {nome: 'GEOGRAFIA', notas: [6.5, 7.8, 8.0]},
        {nome: 'HISTORIA', notas: [7.9, 4.5, 6.7]},
        {nome: 'ARTES', notas: [8.9, 7.0, 7.9]}
    ],
    media: function(index) {
        return this.disciplinas[index].notas.reduce((acc, e) => acc += e, 0.0)/3
    },
    media_geral: function() {
        return this.disciplinas.reduce((acc, e) => {
            return acc + e.notas.reduce((acc2, e2) => acc2 += e2, 0.0)
        }, 0.0)/9
    }
}

console.log(aluno.nome)
console.log(`Disciplina ${aluno.disciplinas[0].nome}: ${aluno.media(0)}`)
console.log(`I.R.A.: ${aluno.media_geral()}`)