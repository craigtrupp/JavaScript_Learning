// Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character. : Find Characters with Lazy Matching
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Find the expression starting with an opening tag < followed by wildcard (anything) zero or more times at the first opportunity that is then followed with a closing tag
let result_lzm = text.match(myRegex);
console.log(result_lzm);

// Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.
let reCriminals = /C+/; // Change this line
console.log("CC".match(reCriminals))

// Use the caret character in a regex to find Cal only in the beginning of the string rickyAndCal. : Match Beginning String Patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result_ricky = calRegex.test(rickyAndCal);
console.log(result_ricky);

// Use the anchor character ($) to match the string caboose at the end of the string caboose. : Match Ending String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result_caboose = lastRegex.test(caboose);

// Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings. : Match All Letters & Numbers
let quoteSample_aph = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result_aph = quoteSample.match(alphabetRegexV2).length;

// Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings. : Match Evertyhing But Letters & Numbers
let quoteSample_nap = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result_nap = quoteSample.match(nonAlphabetRegex).length;


// Use the shorthand character class \d to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count. : Match All Numbers
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result_man = movieName.match(numRegex).length;


// Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.

let movieName_deux = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName_deux.match(noNumRegex).length;


// You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.
// 1 ) Usernames can only use alpha-numeric characters.
// 2 ) The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number. (Explicit start of alpha with either another alpha or at least two digits )
// 3 ) Username letters can be lowercase and uppercase. (case flag at end of expression)
// 4 ) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters. (handled with first or conidition catching a second alpha and zero or more digits)

let username = "JackOfAllTrades";
let userCheck = /^[a-z]([a-z]+\d*|\d\d+)$/i; // Change this line
let result_usrname = userCheck.test(username);

// Condition Explanation below (default start of initial character being alpha and non numeric followed by two conditions separated with or operator)
// ^ - start of input, [a-z] - first character is a letter then, firstCondition - alpha & numeric if found [a-z]+ = has one or more letters next and \d* none or more digits)
// ^ - start of input, [a-z] - first character is a letter then, secondCondition - at least* two digits + more if used are allowed 