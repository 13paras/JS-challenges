//  Ques: Search and Replace: Write a function that performs a search and replace on the sentence using the arguments provided and return the new sentence.

function searchAndReplace(str, before, after) {
    if (before[0] === before[0].toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
    }
    return str.replace(before, after);
}

console.log(searchAndReplace("Let us go to the store", "store", "mall")); // "Let us go to the mall"
console.log(searchAndReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // "He is Sitting on the couch"