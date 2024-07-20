
// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;


// Storing the User’s Guess
let userGuess = null;

//  Storing Feedback Messages
let feedbackMessage = "" ;


// Function to handle the guess submission
function handleGuess() {
    // Get the user's guess from the input field
    userGuess = parseInt(document.getElementById('guess').value);




// Compare the user's guess to the random number and update the feedback message
if (userGuess > randomNumber) {
    feedbackMessage = "Too high! Try again.";
} else if (userGuess < randomNumber) {
    feedbackMessage = "Too low! Try again.";
} else {
    feedbackMessage = "Congratulations! You guessed it!";
}

// Display the feedback message
document.getElementById('feedback').innerText = feedbackMessage;
}


// Attach an event listener to the submit button
document.getElementById('submitGuess').addEventListener('click', handleGuess);

