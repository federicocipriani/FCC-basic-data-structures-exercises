// Many content management sites (CMS) have the titles of a post added to part of the URL for simple bookmarking purposes.
// For example, if you write a Medium post titled "Stop Using Reduce", it's likely the URL would have some form of the title string in it (".../stop-using-reduce").
// Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL.

var globalTitle = " Winter Is   Coming";

function urlSlug(title) {
  return title.toLowerCase().split(/\W/).filter(item => item).join("-");
}

console.log(urlSlug(globalTitle))