// Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. Here are the requirements:
// The input is a string with spaces and title-cased words
// The output is a string with the spaces between words replaced by a hyphen (-)
// The output should be all lower-cased letters
// The output should not have any spaces

// Only change code below this line
function urlSlug(title) {
    let slug_string = []
      .concat(title.trim().split(" "))
      .filter(element => element != "")
      .map(element => element.toLowerCase());
    // can't forEach slug_string as altering array in place won't increase length as hyphens added - for loop needed
    for(let i = 0; i < slug_string.length; i++){
      if(slug_string[i] != '-' && slug_string.length - i > 1){
        slug_string.splice(i + 1, 0, '-');
      }
    }
    return slug_string.join("");
  }
  // Only change code above this line
  console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
  // a-mind-needs-books-like-a-sword-needs-a-whetstone
  console.log(urlSlug(" Winter Is  Coming"));
  // winter-is-coming
