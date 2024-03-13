//
function findVowels(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const result = {};

    for (let i = 0; i < word.length; i++) {
        const char = word[i].toLowerCase();
        if (vowels.includes(char)) {
            if (!result[char]) {
                result[char] = [i.toString()];
            } else {
                result[char].push(i.toString());
            }
        }
    }

    return result;
}

console.log(findVowels("Heleelaeiouo"));