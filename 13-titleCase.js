//  Ques- Write a JavaScript function that accepts an array of arrays with numbers. The function should return a new array containing the largest number from each provided sub-array.
// For example, if the input is [[1, 2, 3], [4, 5, 6], [7, 8, 9]], the function should return [3, 6, 9]


function findLargestNumber(...arr) {
    let largestNumbers = arr.map((subArr) => Math.max(...subArr))
    return console.log(largestNumbers);
}

findLargestNumber([1, 2, 3], [4, 5, 6], [7, 8, 9])
findLargestNumber([1, 2, 3], [4, 5, 6], [7, 8, 9], [-4, 3, -2], [-111, -32, -893])

