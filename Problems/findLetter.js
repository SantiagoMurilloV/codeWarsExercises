
// Count how many times a letter is repeated in a sentence.



function countLetter(letter, arr) {
    let count = 0;
    let arrSeparated = arr.split("")
    arrSeparated.forEach(function (character) {
        if (character === letter) {
            count++;
        }
    });
    return count;
}

console.log(countLetter("o","Hello world")); // Output: 2
