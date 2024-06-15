// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Select the form and result div
    const form = document.querySelector('form');
    const resultsDiv = document.getElementById('results');
    
    // Add an event listener for form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting
      
      // Get the height and weight values
      const height = parseFloat(document.getElementById('height').value);
      const weight = parseFloat(document.getElementById('weight').value);
      
      // Validate inputs
      if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultsDiv.textContent = "Please enter valid height and weight.";
        return;
      }
      
      // Calculate BMI
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      
      // Display the result
      resultsDiv.textContent = `Your BMI is ${bmi.toFixed(2)}`;
    });
  });
  