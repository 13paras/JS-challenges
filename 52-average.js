//  Find average of a array using reduce method.

function average(array) {
   return array.reduce((total, value, index, arr) => {
      total += value;
      if (index === arr.length - 1) {
         return total / arr.length;
      } else {
         return total;
      }
   }, 0);
}

console.log(average([1, 2, 3, 4, 5]));
console.log(average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
