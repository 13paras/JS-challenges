//  Ques- Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

function isTriangle(a, b, c) {
   if (a > 0 && b > 0 && c > 0) {
      if (a + b <= c || a + c <= b || b + c <= a) {
         return false;
      } else {
         return true;
      }
   } else {
      return false;
   }
}

console.log(isTriangle(1, 2, 2)); // true
console.log(isTriangle(7, 2, 2)); // false
console.log(isTriangle(8, -2, 6)); // false
console.log(isTriangle(-2, 1, 3)); // false
console.log(isTriangle(5, 4, 9)); // false
console.log(isTriangle(5, 4, 2)); // true
