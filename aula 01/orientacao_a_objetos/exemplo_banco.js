const sqlite3 = require('sqlite3').verbose()
let db = null
try{
    db = new sqlite3.Database('meu_banco.db')
    db.run(
        `CREATE TABLE user (
        id integer primary key, 
        nome text)`)
} catch(error) {
    console.log(`ERROR: ${error}`)
} finally {
    db.close()
}