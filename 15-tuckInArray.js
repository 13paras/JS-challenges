//  Ques- Create a function that takes two arrays and insert the second array in the middle of the first array.
//  use Spread syntax to solve this


function tuckIn(arr1, arr2) {
    const tuckedArr = [arr1[0], ...arr2, arr1[1]]

    return console.log(tuckedArr)
}

tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])
tuckIn([15, 150], [45, 75, 35])
tuckIn([[1, 2], [5, 6]], [[3, 4]])
tuckIn(["bottom", "topping"], ["tomatosauce", "vegetables", "cheese"]), // ["bottom", "tomatosauce", "vegetables", "cheese", "topping"]
    tuckIn([[1, 2], [5, 6]], [[3, 4]]) // [[1, 2], [3, 4], [5, 6]])
tuckIn([true, false], [false, true, null, undefined]) // [true, false, true, null, undefined, false]