// Ques- Unique Number in Array

function findUniqueNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.filter(num => num === arr[i]).length === 1) {
            return arr[i];
        }
    }
}


console.log(findUniqueNumber([1, 2, 3, 2, 1]))