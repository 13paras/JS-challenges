// - Given a string of words, you need to find the highest scoring word.
// - Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// - For example, the score of abad is 8 (1 + 2 + 1 + 4).
// - You need to return the highest scoring word as a string.
// - If two words score the same, return the word that appears earliest in the original string.


function high(x) {
    const words = x.split(' ');
    let maxScore = 0;
    let highestWord = '';

    for (const word of words) {
        let score = 0;

        for (const letter of word) {
            score += letter.charCodeAt(0) - 96;
        }


        if (score > maxScore) {
            maxScore = score;
            highestWord = word;
        }
    }

    return highestWord;
}

console.log(high('man i need a taxi up to ubud')) // taxi
console.log(high('what time are we climbing up the volcano')) //volcano
console.log(high('d bb')) // d