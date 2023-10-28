// Ques- Reverse a string

function reverseString(str) {
    const reverse = str.split('').reverse().join('');
    const solution = `Original: ${str} & Reversed: ${reverse}`;
    return solution;
}

reverseString("Hello");
reverseString("World");