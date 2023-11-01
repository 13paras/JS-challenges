//  Ques - String Compression (loop): This is a common algorithm problem where you need to compress a string by counting the repetitions of characters. For example, the string “aaabbbcc” would be compressed to “a3b3c2”. This is typically done using a loop to iterate through the string and count the occurrences of each character.


function compressString(str) {
    let result = "";
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            result += str[i] + count
            count = 1;
        }
    }

    return result;
}

console.log(compressString('aaabbbcc'))
console.log(compressString('aaabrrrrraaaaaaakaddddddabrrrrrrrrrrra'))