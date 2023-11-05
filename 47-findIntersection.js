//  Ques- Find the Intersection of Two Arrays (common elements);


function findIntersection(array1, array2){
    const result = array1.filter((value) => array2.includes(value))

    return result
}

let array1 = ['apple', 'banana', 'cherry', 'date'];
let array2 = ['date', 'elderberry', 'fig', 'grape'];
console.log(findIntersection(array1, array2)); // ['date']

let array3 = [1, 2, 3, 4, 5];
let array4 = [4, 5, 6, 7, 8];
console.log(findIntersection(array3, array4)); // [4, 5]
