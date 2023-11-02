//  Ques: Remove whitespace from a string:


function removeWhitespace(str) {
   return str.replace(/\s/g, "");
}

console.log(removeWhitespace('Hello World'));
console.log(removeWhitespace('Remove spaces from this sentence'));
console.log(removeWhitespace('       Remove leading and traling spaces    '));
