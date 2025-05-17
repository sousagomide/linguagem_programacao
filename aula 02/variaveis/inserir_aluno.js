const db = require('./db')

const matricula = '2025108201345796'
const nome = 'Juliano'
const sexo = 'M'
const idade = 20

db.query('INSERT INTO alunos (matricula, nome, sexo, idade) VALUES ($1, $2, $3, $4)', [matricula, nome, sexo, idade])
.then(() => console.log('Registro inserido com sucesso!'))
.catch((err) => console.error(err.stack))
.finally(() => db.close())