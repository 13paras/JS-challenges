//  Ques- Check for Anagrams: An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. For example, the word ‘anagram’ can be rearranged into ‘nag a ram’. Here’s a simple function to check if two strings are anagrams:

function checkAnagram(str1, str2) {
   let sortedStr1 = str1.split('').sort().join('');
   let sortedStr2 = str2.split('').sort().join('');

   return sortedStr1 === sortedStr2;
}

console.log(checkAnagram('listen', 'silent')); // Output: true
console.log(checkAnagram('hello', 'world')); // Output: false
