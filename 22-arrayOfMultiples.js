//  Array of Multiples

function arrayOfMultiples(num, length){
    let result = [];
    for(let i = 1; i <= length; i++){
        result.push(num * i)
    }
    return console.log(result)
}

arrayOfMultiples(7, 5) // [7, 14, 21, 28, 35]
arrayOfMultiples(12, 10) // [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
arrayOfMultiples(17, 6) // [17, 34, 51, 68, 85, 102]