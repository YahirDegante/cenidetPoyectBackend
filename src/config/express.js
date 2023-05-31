const express = require('express');
const cors = require('cors');
const { userRouter } = require('../modules/routes.js');
const { externalAdvisorRouter } = require('../modules/routes.js');
const nodemailer = require('nodemailer');

require('dotenv').config();
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(cors(
    origins = "*"
));

app.use(express.json(
    limit = '50mb'
));

app.get('/', (req, res) => {
    res.send('Cenidet Backend');
});

// Rutas
app.use('/api/users', userRouter);
app.use('/api/externalAdvisors', externalAdvisorRouter);


module.exports = { app };
