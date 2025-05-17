const conexao = require('./db.js')

const query = 'SELECT * FROM alunos ORDER BY nome'

conexao.query(query)
.then((res) => console.table(res.rows))
.catch((err) => console.log('Erro ao inserir aluno: ', err.stack))
.finally(() => conexao.end())