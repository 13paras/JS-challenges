//  Ques- Find the longest Increasing Subarray

function longestIncreasingSubArr(arr) {
   let maxLen = 1,
      len = 1,
      maxStart = 0;

   for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[i - 1]) {
         len++;
      } else {
         if (maxLen < len) {
            maxLen = len;
            maxStart = i - maxLen;
         }
         len = 1;
      }
   }

   if (maxLen < len) {
      maxLen = len;
      maxStart = arr.length - maxLen;
   }

   return arr.slice(maxStart, maxStart + maxLen);
}

console.log(longestIncreasingSubArr([1, 2, 3, 2, 3, 4, 5, 1, 2]));
