// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
    str = str.toLowerCase();
    str = str.replace(/(^|\s)\w/g, initials => initials.toUpperCase());
    console.log(str);
}

titleCase("I'm a little tea pot");
