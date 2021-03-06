const Database = require('sqlite-async');

// vou pedir pra criar uma tabela no bando de dados, caso não exista ainda
// CREATE TABLE IF NOT EXISTS 

// INTEGER = é um número inteiro
function execute(db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `)
}

//Database abre e então depois que abrir passa o bando de dados. O execute vai ser um atalho pra função debaixo.
module.exports = Database.open(__dirname + '/database.sqlite').then(execute) // o resultado disso é o db