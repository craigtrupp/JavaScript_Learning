// Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

// casing is the first character of string in original string that is being searched based off before parameter, ternary bases the after (replacement string) casing based off the casing in original string (satisfy note detail line 10)
function myReplace(str, before, after) {
    let casing = str.slice(str.search(before), str.search(before)+ 1)
    let replaceString = casing == casing.toLowerCase() ? after.slice(0,1).toLowerCase() + after.slice(1,after.length) : after.slice(0,1).toUpperCase() + after.slice(1, after.length)
    return str.replace(before, replaceString);
  }