// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    let alphabet = String.fromCharCode(...Array(123).keys()).slice(97);
    let startIndex = alphabet.indexOf(str[0]);
    for (let i=0; i<str.length;i++) {
        if (str[i] !== alphabet[startIndex+i]) {
            return alphabet[startIndex+i];
        }
    }
    return undefined;
}

fearNotLetter("abcdefghijklmnopqrstuvwxyz");
