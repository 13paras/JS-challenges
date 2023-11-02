// Ques- Count the Number of Occurrences of a Word in a Text (split + filter): Count word occurrences in a text using.

function countWordOccurrence(text, word) {
   let words = text.split(' ');
   let length = words.filter((w) => {
      if (w == word) {
         return w;
      }
   });

   return length.length;
}

console.log(countWordOccurrence('hello world hello hello', 'hello')); // Output: 3
console.log(countWordOccurrence('this is a test this is only a test', 'test')); // Output: 2
console.log(
   countWordOccurrence('apple banana apple strawberry banana apple', 'banana')
); // Output: 2
