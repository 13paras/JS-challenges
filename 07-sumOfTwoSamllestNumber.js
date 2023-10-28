
function sumTwoSmallestNumbers(numbers) {
    let sortedNum = numbers.sort((a, b) => a - b)
    const result = sortedNum[0] + sortedNum[1]

    return result
}

sumTwoSmallestNumbers([16, 5, 6, 200, 4])
sumTwoSmallestNumbers([-1, -2, 6, 30, 19])
sumTwoSmallestNumbers([16, 705, 996, 200, 4])
