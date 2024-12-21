const express = require('express');
const router = express.Router();
const moment = require('moment')
const { calculateBMI, interpretBMI } = require('../core/bmiLogic');

let history = [];

router.post('/', (req, res) => {
    const { weight, height, unit, age, gender } = req.body;
    const bmi = calculateBMI(parseFloat(weight), parseFloat(height), unit);
    const interpretation = interpretBMI(bmi);
    const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');

    history.push({ bmi, interpretation, timestamp, age, gender });

    res.send(`
        <h3>Your BMI: ${bmi}</h3>
        <h4>Interpretation: ${interpretation}</h4>
        <a href="/">Back</a>
    `);
});

router.get('/history', (req, res) => {
    let historyHtml = history.map(
        (entry) => `<li>${entry.timestamp} - BMI: ${entry.bmi} (${entry.interpretation})</li>`
    ).join('');

    res.send(`
        <h2>BMI History</h2>
        <ul>${historyHtml}</ul>
        <a href="/">Back</a>
    `);
});

module.exports = router;
