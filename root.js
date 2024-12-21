const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const { calculateBMI, interpretBMI } = require('./core/bmiLogic');
const bmiRoutes = require('./routes/bmiRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/bmiCalculator.html');
});

app.use('/bmicalculator', bmiRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
