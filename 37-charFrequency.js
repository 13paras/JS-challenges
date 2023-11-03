//  Ques- Calculate the frequency of Characters in a String:

function charFrequency(str) {
   let freq = {};
   for (let i = 0; i < str.length; i++) {
      let char = str.charAt(i);
      if (freq[char]) {
         freq[char]++;
      } else {
         freq[char] = 1;
      }
   }
   return freq;
}

console.log(charFrequency('Hello World')); // Outputs: { H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1 }
console.log(
   charFrequency('Today is Day 8 of challenge and this is 37th coding exercise')
); // Output: { '3': 1, '7': 1, '8': 1, T: 1, o: 3, d: 3, a: 4, y: 2, ' ': 11, i: 5, s: 4, D: 1, f: 1, c: 3, h: 3, l: 2, e: 5, n: 3, g: 2, t: 2, x: 1, r: 1 }
