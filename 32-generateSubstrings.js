//  Ques- Generate All Substrings of a String (nested loops): Generate all possible substrings of a string.

function generateSubstrings(str) {
   let substrings = [];
   for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
         substrings.push(str.slice(i, j));
      }
   }

   return substrings;
}

console.log(generateSubstrings('abc'));
// Output: ["a", "ab", "abc", "b", "bc", "c"]

console.log(generateSubstrings('hello'));
// Output: ["h", "he", "hel", "hell", "hello", "e", "el", "ell", "ello", "l", "ll", "llo", "l", "lo", "o"]

console.log(generateSubstrings('123'));
// Output: ["1", "12", "123", "2", "23", "3"]
