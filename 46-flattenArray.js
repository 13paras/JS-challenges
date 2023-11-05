//  Flatten a nested Array.

function flattenArray(nestedArr) {
   return nestedArr.reduce((arr, subarray) => arr.concat(subarray), []);
}

console.log(
   flattenArray([
      [1, 2],
      [3, 4],
      [5, 6],
   ])
);
