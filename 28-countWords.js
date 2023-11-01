// Ques- Count words in a string.

function countWords(sentence) {
    let words = sentence.split(' ').length;

    return words
}

console.log(countWords("Hello, how are you?"));  // Output: 4
console.log(countWords("Hello, how are you? Hope you are enjoying these coding exercises!!"));  // Output: 11
console.log(countWords("If you solved this much then you are doing very good. So All the best for rest of the exercises"));  // Output: 20
