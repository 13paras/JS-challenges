// Alternative among three values
// Suppose a variable x can have only three possible different values a, b and c, and you wish to assign to x the value other than its current one, and you wish your code to be independent of the values of a, b and c.

// What is the most efficient way to cycle among three values? Write a function f so that it satisfies

/* 
f(a) = b
f(b) = c
f(c) = a
*/

function f(x, values) {
   if (x === values.a) {
      return values.b;
   } else if (x === values.b) {
      return values.c;
   } else if (x === values.c) {
      return values.a;
   }
}

console.log(f(3, { a: 3, b: 4, c: 5 })); // Outputs: 4
console.log(f(4, { a: 3, b: 4, c: 5 })); // Outputs: 5
console.log(f(5, { a: 3, b: 4, c: 5 })); // Outputs: 3
