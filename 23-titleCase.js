// Ques-  Write a function that capitalizes the first letter of each word in a sentence and makes all other letters lowercase.

const titleCase = (str) => {
    const correctedSent = str.toLowerCase().split(' ').map(function(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');

    return correctedSent
}

console.log(titleCase("I'm a little tea pot")); // "I'm A Little Tea Pot"
console.log(titleCase("sHoRt AnD sToUt")); // "Short And Stout"
