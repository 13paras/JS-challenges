// Ques- Write a function that splits an array into groups the length of size and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size){
    let result = [];
    while (arr.length > 0){
        result.push(arr.splice(0, size));
    }
    return result
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // [["a", "b"], ["c", "d"]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); // [[0, 1, 2], [3, 4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7], 3)); // [[0, 1, 2], [3, 4, 5], [6, 7]]