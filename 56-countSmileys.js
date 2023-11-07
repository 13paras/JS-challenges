// Ques- Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]
//! Rules - eyes can be : or ;, nose cane be - or ~, smiley can be ) or D.

function countSmileys(arr) {
    let count = 0;
    const smileyPattern = /^[:;][-~]?[)D]$/;
    for (let i = 0; i < arr.length; i++) {
        if (smileyPattern.test(arr[i])) {
            count++;
        }
    }
    return count;
}

console.log(countSmileys([])); // 0
console.log(countSmileys([':D', ':~)', ';~D', ':)'])); // 4
console.log(countSmileys([':)', ':(', ':D', ':O', ':;'])); //2
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); //1
console.log(countSmileys([':)', ';(', ';}', ':-D'])); // 2;
console.log(countSmileys([';D', ':-(', ':-)', ';~)'])); // 3;
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // 1;
