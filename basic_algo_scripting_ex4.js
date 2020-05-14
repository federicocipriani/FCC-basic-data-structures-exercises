function findLongestWordLength(str) {
    let regex = /\w+/g;
    let words = str.match(regex);
    let maxLength = 0;
    for (let word in words) {
        if (words[word].length > maxLength) {
            maxLength = words[word].length;
        }
    }
    return maxLength;
}

findLongestWordLength("May the force be with you");
