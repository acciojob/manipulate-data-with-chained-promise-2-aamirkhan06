//your JS code here. If required.
// script.js

// Function to resolve a promise after a specified delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Initial array
let inputArray = [1, 2, 3, 4];
// Chain promises
delay(1000).then(() => {
    // Filter out odd numbers
    inputArray = inputArray.filter(num => num % 2 === 0);
	const outputDiv = document.getElementById('output');
    outputDiv.textContent = inputArray.join(',');
    return delay(2000);
  })
  .then(()=> {
    // Multiply even numbers by 2
    inputArray = inputArray.map(num => num * 2);
    return inputArray;
  })
  .then(resultArray => {
    // Update the output div with the result
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = resultArray.join(',');
  })
  .catch(error => {
    console.error('An error occurred:', error);
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = 'An error occurred. Please try again.';
  });
