//  Ques- write a function that takes an array of numbers and returns a new array that contains only the unique elements
// ex= unique([1, 2, 3, 3, 4, 4, 5]) ==> [1, 2, 3]

function unique(arr) {
    return [...new Set(arr)];
}

console.log(unique([1, 2, 3, 3, 4, 4, 5]))
console.log(unique([10, 20, 10, 30, 40, 20]))