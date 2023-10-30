//  Ques -  Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.

function findLongestWord(str) {
    let words = str.split(" ");
    let longestWord = '';
    for (const word of words) {
        longestWord = word;
        if (longestWord.length > word) {
            longestWord = word
        }
    }
    return console.log(longestWord)
}

findLongestWord('Hello this is a function')
findLongestWord('I love JavaScript')