const conexao = require('./db.js')

const matricula = '2025108206660349'

const query = 
'DELETE FROM alunos WHERE matricula = $1'
const valores = [matricula]

conexao.query(query, valores)
.then(() => console.log('Registro Removido'))
.catch((err) => console.log('Erro ao remover aluno: ', err.stack))
.finally(() => conexao.end())
