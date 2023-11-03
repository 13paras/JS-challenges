// Ques- Abbreviate a string by taking the first letter of eaCh word and capitalizing it (Solve using: split + map + join)

function abbreviate(str) {
   const text = str.split(' ');
   const result = text.map((word) => word.charAt(0).toUpperCase()).join('');

   return result;
}

console.log(abbreviate('hello world')); // Outputs: "HW"
console.log(abbreviate('do not disturb')); // Outputs: "JSON"
