const conexao = require('./db.js')

const matricula = '2025108206660349'
const nome = 'Denecley Alvim Soares'
const idade  = 23

const query = 
'UPDATE alunos SET nome = $1, idade = $2 WHERE matricula = $3'
const valores = [nome, idade, matricula]

conexao.query(query, valores)
.then(() => console.log('Registro Atualizado'))
.catch((err) => console.log('Erro ao atualizar aluno: ', err.stack))
.finally(() => conexao.end())
