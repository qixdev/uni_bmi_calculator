document.querySelector('form').addEventListener('submit', function (e) {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseInt(document.getElementById('age').value);

    if (height <= 0 || weight <= 0 || age <= 0) {
        e.preventDefault();
        alert('Height, weight, and age must be positive numbers!');
        return;
    }

    if (isNaN(height) || isNaN(weight) || isNaN(age)) {
        e.preventDefault();
        alert('Please fill in all fields with valid numbers!');
        return;
    }
});
