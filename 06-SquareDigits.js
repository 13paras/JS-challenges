// Ques - Return the square of each number
// like this squareDigits(3212) = 9414


function squareDigits(num) {
    let number = num.toString().split('');
    let solution = '';
    number.forEach(e => {
        solution += e * e;
    });
    return solution
}

console.log(squareDigits(3212)) 