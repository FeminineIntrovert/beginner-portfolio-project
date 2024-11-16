// Select the display input element using its id
const display = document.getElementById('display');

// Select all buttons inside the calculator
const buttons = document.querySelectorAll('.buttons button');

// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent; // Retrieve the text inside the clicked button

        // Check if the '=' button was clicked
        if (buttonText === '=') {
            try {
                display.value = eval(display.value); // Evaluate the expression and update the display
            } catch (error) {
                display.value = 'Error'; // Display 'Error' if evaluation fails
            }
        } 
        // Check if the 'C' button was clicked for clearing (if you plan to add a clear button)
        else if (buttonText === 'C') {
            display.value = ''; // Clear the display
        } 
        // Append the clicked button's text to the display (for numbers and operators)
        else {
            display.value += buttonText;
        }
    });
});