//  Ques - Convert a string to lowerCamelCase (split + map + join);

function toCamelCase(str) {
   const sentence = str.toLowerCase().split(' ');
   const camelCase = sentence
      .map((word, index) => {
         if (index == 0) {
            return word;
         } else {
            return word.charAt(0).toUpperCase() + word.slice(1);
         }
      })
      .join('');

   return camelCase;
}

console.log(toCamelCase('hello world'));
console.log(toCamelCase('Convert this to camel case'));
