// Your solution goes here 

function playGuessingGame(numToGuess, totalGuesses = 10) {
    let numGuesses = 0;

    while (numGuesses < totalGuesses) {
        let promptText = "Enter a number between 1 and 100.";
        if (numGuesses > 0) {
            const prevGuess = promptText.includes("larger") ? "smaller" : "larger";
            promptText = `${prevGuess} is too ${prevGuess}. ${promptText}`;
        }

        const userInput = prompt(promptText);
        if (userInput === null) {
            // If the user presses Cancel, return 0 immediately without prompting for more numbers.
            return 0;
        }

        const guessedNum = Number(userInput);

        if (isNaN(guessedNum)) {
            // If the user entered an empty string or a non-number, give them another chance without losing a turn.
            continue;
        }

        numGuesses++;
        if (guessedNum === numToGuess) {
            // User guessed the correct number.
            return numGuesses;
        } else if (guessedNum < numToGuess) {
            promptText = `${guessedNum} is too small. Guess a larger number.`;
        } else {
            promptText = `${guessedNum} is too large. Guess a smaller number.`;
        }
    }

    // If the user couldn't guess the correct number within the allowed number of guesses, return 0.
    return 0;
}

// To test the function, call it from the JavaScript console.
// Example: playGuessingGame(5) will allow the user 10 guesses to guess the number 5.
// Example: playGuessingGame(7, 3) will allow the user 3 guesses to guess the number 7.

