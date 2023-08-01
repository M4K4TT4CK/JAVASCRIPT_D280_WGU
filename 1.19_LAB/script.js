function calcWordFrequencies() {
    const wordFrequencyMap = new Map();
    const input = prompt("Enter a list of words separated by spaces:");

    if (input) {
        const words = input.split(" ");
        for (const word of words) {
            const lowercaseWord = word.toLowerCase();
            const count = wordFrequencyMap.get(lowercaseWord) || 0;
            wordFrequencyMap.set(lowercaseWord, count + 1);
        }

        for (const [word, frequency] of wordFrequencyMap) {
            console.log(`${word} ${frequency}`);
        }
    } else {
        console.log("No words entered.");
    }
}

// Call the function to run it in the browser's JavaScript console
calcWordFrequencies();
