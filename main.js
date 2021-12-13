const express = require('express');
const sess = require("express-session");

const app = express();
app.use(express.json());

app.use(sess({
    secret: 'INBYULTALK',
    resave: 0,
    saveUninitialized: 1
}));

app.disable('x-powered-by');

app.use(express.static('client', {
    extensions: ['html', 'htm']
}));

app.use('/api', require('./router'));

app.listen(3000, () => console.log('ON'));