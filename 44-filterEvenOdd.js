//  seperate even and odd numbers

function filterEvenOdd(arr) {
   let odd = arr.filter((num) => num % 2 !== 0);
   let even = arr.filter((num) => num % 2 === 0);
   return { odd, even };
}

console.log(filterEvenOdd([1, 2, 3, 4, 5, , 6, 7, 8, 9]));
