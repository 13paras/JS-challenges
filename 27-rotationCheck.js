//  Ques - String Rotation Check: This is a method to check if one string is a rotation of another. The idea is to concatenate the first string with itself, and then check if the second string is a substring of the result. For example, “abc” and “cab” are rotations of each other because “abcabc” contains “cab”.

function rotationCheck(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    return (str1 + str1).includes(str2);
}

console.log(rotationCheck("abc", "cab"));  // Output: true
console.log(rotationCheck("abc", "acb"));  // Output: false
