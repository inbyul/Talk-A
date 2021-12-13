const router = require('express').Router();
const db = require('../src/Database.js');

router.use('/signin', require('./signin')(db));
router.use('/signup', require('./signup')(db));

router.use('/getUser', require('./getUser')(db));

module.exports = router;