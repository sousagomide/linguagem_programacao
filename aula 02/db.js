const { Client } = require('pg')

const conexao = new Client({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'dbboletim'
})

conexao.connect()
.then(() => console.log('Conectado...'))
.catch(err => console.log('Erro de conexão', err.stack))

module.exports = conexao