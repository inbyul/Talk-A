const router = require('express').Router();
const sqlite = require('sqlite3').verbose();

db = new sqlite.Database('../talk.db');

db.exec(`CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT, email TEXT, password TEXT
)`);

router.use('/signin', require('./signin'));
router.use('/signup', require('./signup'));

module.exports = router;