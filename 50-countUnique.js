// Ques- count unique elements (using Set)

function countUniqueElements(array) {
   let uniqueElements = new Set(array);
   return uniqueElements.size;
}

console.log(countUniqueElements([1, 2, 2, 3, 3, 3, 4, 4, 4, 4])); // 4
