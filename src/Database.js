
const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database('../talk.db');

db.exec(`CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT, email TEXT, password TEXT,
    createdAt INTEGER
)`);

sqlite.Database.prototype.getUSER = async function(email) {

    return new Promise((resolve, reject) => {

        const query = `SELECT * FROM
            user WHERE PASSWORD = ?`;

        this.get(query, email, (err, row) => {
        
            if (err) reject();
            else resolve(row);

        });

    });

};

sqlite.Database.prototype.addUSER = async function(name, email, password) {

    return new Promise((resolve, reject) => {

        const query = `INSERT INTO user VALUES(?, ?, ?, ?)`;
        const param = [ name, email, password, Date.now() ];

        this.run(query, param, err => err ? reject(err) : resolve());

    });

};

module.exports = db;