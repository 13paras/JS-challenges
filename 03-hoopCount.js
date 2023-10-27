// Returns a message based on the number
// n is less than 10 then return: Keep at it until you get it
// n is greater than 10 then return: Great, now move on to tricks



function hoopCount(n) {
    return (n >= 10 ? "Great, now move on to tricks" : 'Keep at it until you get it')
}

console.log(hoopCount(3))
console.log(hoopCount(11))