//  Ques - This time no story, no theory. The examples below show you how to write function accum:
// Note: this function can also be solved through other methods and single loop but i chose to use this method to deepen my understanding of loops.

function accum(str) {
   let acc = [];
   for (let i = 0; i < str.length; i++) {
      acc.push(str.toUpperCase().charAt(i));
      for (let j = 0; j < str.length; j++) {
         if (j < i) {
            acc[i] += str.toLowerCase().charAt(i);
         }
      }
   }
   return acc.join('-');
}

console.log(accum('abcd')); // "A-Bb-Ccc-Dddd"
console.log(accum('RqaEzty')); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum('cwAt')); // "C-Ww-Aaa-Tttt"
console.log(accum('ZpglnRxqenU')); // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
