//  Ques- Reverse Words in a String while keeping spaces intact:


function keepSpaces(text) {
   const splittedText = text.split(' ');
   const result = splittedText
      .map((word) => word.split('').reverse().join(''))
      .join(' ');

   return result;
}

console.log(keepSpaces('Hello World')); // Outputs: "olleH dlroW"
