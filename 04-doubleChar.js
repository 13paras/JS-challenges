// Ques -> Double Each char in the string
// function doubleChar(str) { };



function doubleChar(str) {
    let string = str.split('');
 const emptyString = [ ]
 string.forEach( e => {
   const word = e.repeat(2);
   console.log(word) 
})
}

doubleChar('abcd')