//  ques- Remove Duplicates from a String: A Set is a built-in JavaScript object that allows you to store unique values. When you add a value to a Set that already exists in it, it will not be added a second time. Here’s how you can use it to remove duplicates from a string:

function removeDuplicates(str) {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if (result.indexOf(str[i]) < 0) {
            result += str[i]
        }
    }

    return result
}


console.log(removeDuplicates("hello"));  // Output: "helo"
console.log(removeDuplicates("aabccdef"));  // Output: "abcdef"
console.log(removeDuplicates("aaabrrraaaakaddddabrrrrrrra"));  // Output: "abcdef"
