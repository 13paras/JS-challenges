//  Ques- Create a JavaScript function that takes a string as input and returns the most common character in the string.

function commonChar(str) {
   const charFrequency = {};

   let mostCommonChar = '';
   let maxCount = 0;

   for (let char of str) {
      if (charFrequency[char]) {
         charFrequency[char]++;
      } else {
         charFrequency[char] = 1;
      }

      if (charFrequency[char] > maxCount) {
         mostCommonChar = char;
         maxCount = charFrequency[char];
      }
   }

   return mostCommonChar;
}

console.log(commonChar('Hello World'));
console.log(commonChar('abraa ka dabra'));
