//  Ques - find vowels from the following
//vowels = a,e,i,o,u


const getCount = (str) => {
    const word = str.toLowerCase().split('');
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let result = 0

    for (const letter of word) {
        if (vowels.includes(letter)) {
            result += 1
            vowels.splice(vowels.indexOf(letter), 1)
        }
    }

    return result
}

getCount('abracadabra')
getCount('envelope')