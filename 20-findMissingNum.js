// Find the Missing Number: You are given a list of n-1 integers and these integers are in the range of 1 to n. There are no duplicates in the list. One of the integers is missing in the list. Write a function to find this integer.


function findMissingNumber(array, n) {
    let totalSum = (n * (n + 1)) / 2;
    let arraySum = array.reduce((a, b) => a + b, 0);
    return totalSum - arraySum;
}

console.log(findMissingNumber([1, 2, 4, 6, 3, 7, 8], 8)); // 5
console.log(findMissingNumber([1, 2, 3, 5], 5)); // 4
