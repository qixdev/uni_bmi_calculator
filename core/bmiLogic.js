function calculateBMI(weight, height, unit) {
    if (unit === 'imperial') {
        weight = weight * 0.453592; // Convert lbs to kg
        height = height * 2.54; // Convert inches to cm
    }
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(2);
}

function interpretBMI(bmi) {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi <= 24.9) return 'Normal weight';
    if (bmi >= 25 && bmi <= 29.9) return 'Overweight';
    return 'Obesity';
}

module.exports = { calculateBMI, interpretBMI };
