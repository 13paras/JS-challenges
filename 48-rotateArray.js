//  Ques- Rotate an Array:

function rotateArray(arr, positions) {
   arr.unshift(...arr.splice(-positions));

   return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));

console.log(
   rotateArray(['apple', 'banana', 'cherry', 'date', 'elderberry'], 2)
); // ['date', 'elderberry', 'apple', 'banana', 'cherry']
