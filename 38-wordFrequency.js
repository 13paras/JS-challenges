//  Count Word Frequency in a Text: (solve using split + reduce)

function wordFrequency(text) {
   let words = text.split(' ');
   return words.reduce(function (freq, word) {
      if (freq[word]) {
         freq[word]++;
      } else {
         freq[word] = 1;
      }
      return freq;
   }, {});
}

console.log(wordFrequency('Hello World Hello')); // Outputs: { Hello: 2, World: 1
console.log(wordFrequency("Namaste Everyone!! How's it's going??"));
