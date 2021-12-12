const express = require('express');

const app = express();
app.disable('x-powered-by');

app.use(express.static('client', {
    extensions: ['html', 'htm']
}));

app.use('/api', require('./router'));

app.listen(3000, () => console.log('ON'));