function calculateStats() {
    // Get the input value
    const input = document.getElementById('numbers').value;
    
    // Split the input into an array of strings and convert them to numbers
    const numberArray = input.split(',').map(num => parseFloat(num.trim()));

    // Check if all elements are numbers
    if (numberArray.some(isNaN)) {
        document.getElementById('results').innerHTML = 'Please enter valid numbers.';
        return;
    }

    // Calculate sum and average
    const sum = numberArray.reduce((acc, num) => acc + num, 0);
    const average = sum / numberArray.length;

    // Check if any number is above a threshold
    const threshold = 30;
    const anyAboveThreshold = numberArray.some(num => num > threshold);

    // Display results
    let resultsHtml = `
        <p><strong>Sum:</strong> ${sum}</p>
        <p><strong>Average:</strong> ${average.toFixed(2)}</p>
        <p><strong>Any number above ${threshold}:</strong> ${anyAboveThreshold ? 'Yes' : 'No'}</p>
    `;

    document.getElementById('results').innerHTML = resultsHtml;
}
