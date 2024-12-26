const express = require('express');
const router = express.Router();
const moment = require('moment')
const { calculateBMI, interpretBMI } = require('../core/bmiLogic');
const fs = require('fs');
const historyFile = './bmiHistory.json';

if (fs.existsSync(historyFile)) {
    history = JSON.parse(fs.readFileSync(historyFile, 'utf8'));
}

let history = [];

router.post('/', (req, res) => {
    const { weight, height, unit, age, gender } = req.body;
    const bmi = calculateBMI(parseFloat(weight), parseFloat(height), unit);
    const interpretation = interpretBMI(bmi);
    const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');

    const entry = { bmi, interpretation, timestamp, age, gender };
    history.push(entry);

    fs.writeFileSync(historyFile, JSON.stringify(history, null, 2));

    res.send(`
        <div class="container mt-5">
            <div class="card text-center">
                <div class="card-header">
                    <h3>Your BMI Result</h3>
                </div>
                <div class="card-body">
                    <h4 class="card-title">BMI: ${bmi}</h4>
                    <p class="card-text">${interpretation}</p>
                    <a href="/" class="btn btn-primary">Back</a>
                </div>
            </div>
        </div>
    `);
});

router.get('/history', (req, res) => {
    let historyHtml = history.map(
        (entry) => `
            <tr>
                <td>${entry.timestamp}</td>
                <td>${entry.bmi}</td>
                <td>${entry.interpretation}</td>
                <td>${entry.age}</td>
                <td>${entry.gender}</td>
            </tr>`
    ).join('');

    res.send(`
        <div class="container mt-5">
            <h2>BMI History</h2>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Timestamp</th>
                        <th>BMI</th>
                        <th>Interpretation</th>
                        <th>Age</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    ${historyHtml}
                </tbody>
            </table>
            <a href="/" class="btn btn-secondary mt-3">Back</a>
        </div>
    `);
});


module.exports = router;
