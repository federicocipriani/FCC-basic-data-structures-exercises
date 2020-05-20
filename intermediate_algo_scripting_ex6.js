// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
// - If a word begins with a vowel, just add "way" at the end.

function translatePigLatin(str) {
    let subStr = str.match(/^[^aeiou]+/g);
    console.log(subStr);
    console.log(!subStr);
    console.log(str.length);

    if (!subStr) {
        return str + 'way';
    }
    else if (subStr[0].length < str.length) {
        return str.substr(subStr[0].length) + str.substr(0,subStr[0].length) + 'ay';
    }
    else if (str.length == subStr[0].length) {
        return subStr[0] + 'ay';
    }
}

translatePigLatin("algorithm");
