const express = require('express');
const cors = require('cors');
const { userRouter } = require('../modules/routes.js');

require('dotenv').config();
const app = express(); 

app.set('port', process.env.PORT || 3001);

app.use(cors(
    origins="*"
));

app.use(express.json(
    limit='50mb'
));

app.get('/', (req, res) => {
    res.send('Cenidet Backend');
});


//rutas
app.use('/api/users', userRouter);

module.exports = {app};