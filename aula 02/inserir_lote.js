const conexao = require('./db.js')


const listaAlunos = [
    {matricula: "2025108201345785", nome: "Lucas", sexo: "M", idade: 21},
    {matricula: "2025108201345786", nome: "Aline", sexo: "F", idade: 23},
    {matricula: "2025108201345787", nome: "Diego", sexo: "M", idade: 20},
    {matricula: "2025108201345788", nome: "Mariana", sexo: "F", idade: 24},
    {matricula: "2025108201345789", nome: "Felipe", sexo: "M", idade: 22},
    {matricula: "2025108201345790", nome: "Renata", sexo: "F", idade: 21},
    {matricula: "2025108201345791", nome: "Thiago", sexo: "M", idade: 23},
    {matricula: "2025108201345792", nome: "Carolina", sexo: "F", idade: 22},
    {matricula: "2025108201345793", nome: "Bruno", sexo: "M", idade: 20}
  ]
  
listaAlunos.forEach((e) => {
    const query = 'INSERT INTO alunos (matricula, nome, sexo, idade) VALUES ($1, $2, $3, $4)'
    const valores = [e.matricula, e.nome, e.sexo, e.idade]
    conexao.query(query, valores)
    .then(() => console.log('Registro Inserido'))
    .catch((err) => console.log('Erro ao inserir aluno: ', err.stack))
})



