const mediaAluno = [9.4, 7.8, 8.9, 10.0, 6.5]

let somatorio = 0
for(i = 0; i < mediaAluno.length; i++)
    somatorio += mediaAluno[i]
const mediaDaTurma = somatorio/mediaAluno.length

console.log(`Média da turma é ${mediaDaTurma}`)