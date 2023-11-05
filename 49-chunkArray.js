//  Ques- Chunk an Array into Smaller Arrays (for loop)/(can also use any method):


function chunkArray(array, size) {
   let result = [];
   for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
   }
   return result;
}


console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
