const db = require('./db')

db.query('SELECT * FROM alunos ORDER BY nome')
.then((e) => console.table(e.rows))
.catch((err) => console.error(err.stack))
.finally(() => db.close())