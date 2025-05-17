const conexao = require('./db.js')

const matricula = '2025108201345784'
const nome = 'Zabelê'
const sexo = 'F'
const idade  = 22

const query = 'INSERT INTO alunos (matricula, nome, sexo, idade) VALUES ($1, $2, $3, $4)'
const valores = [matricula, nome, sexo, idade]

conexao.query(query, valores)
.then(() => console.log('Registro Inserido'))
.catch((err) => console.log('Erro ao inserir aluno: ', err.stack))
.finally(() => conexao.end())