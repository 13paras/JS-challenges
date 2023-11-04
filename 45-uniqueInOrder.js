// Implement the function uniqueInOrder which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
// ('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// ('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// ([1,2,2,3,3])       == [1,2,3]

function uniqueInOrder(iterable) {
   let result = [];
   for (let i = 0; i < iterable.length; i++) {
      if (i == 0) {
         result.push(iterable[i]);
      } else if (result[result.length - 1] !== iterable[i]) {
         result.push(iterable[i]);
      }
   }
   return result;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
