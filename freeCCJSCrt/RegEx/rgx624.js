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
// ^ - start of input, [a-z] - first character is a letter then, firstCondition - alpha & numeric if found [a-z]+ = has one or more letters next and \d* none or more digits) and end of expression for numeric or not $
// ^ - start of input, [a-z] - first character is a letter then, secondCondition - at least* two digits + more if used are allowed) and end of expression for numeric or not $


// Change the regex countWhiteSpace to look for multiple whitespace characters in a string. : Match Whitespace
let sample_ws = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result_ws = sample.match(countWhiteSpace);


// Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string. : Match Non-Whitespace Characters 
let sample_nws = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/gi; // Change this line
let result_nws = sample.match(countNonWhiteSpace);


// Change the regex ohRegex to match the entire phrase "Oh no" only when it has 3 to 6 letter h's. : Specify Upper and Lower Number of Matches
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/i; // Change this line (start of Oh string and count the characters allowed for h 3-6 followed by a whitespace and the end of the string "no" for the phrase "Oh no")
let result_ohStr = ohRegex.test(ohStr);

//console.log('Ohhhhhhh no'.match(/h/g).length) a way to count the length


// Change the regex haRegex to match the word Hazzah only when it has four or more letter z's. : Specify Only the Lower Number of Matches
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/i; // Change this line
let result_hazh = haRegex.test(haStr);


// Change the regex timRegex to match the word Timber only when it has four letter m's. : Specify Exact Number of Matches 
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result_tmstr = timRegex.test(timStr);

// Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word. : Check for All or None
let favWord = "favorite";
let favRegex = /favou?rite/i; // Change this line
let result_fvwrd = favRegex.test(favWord);


// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits. : Positive and Negative Lookahead
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\w*\d{2,})/; // Change this line
let result_smpnl = pwRegex.test(sampleWord);


// Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.
// Then fix the code so that the regex that you have created is checked against myString and either true or false is returned depending on whether the regex matches. : Mixed Grouping of Characters
let myString_rosey = "Eleanor Roosevelt";
let myRegex_rosey = /^(Franklin|Eleanor).*\sRoosevelt$/; // Change this line
let result_rosey = myRegex_rosey.test(myString_rosey); // Change this line
// start (^) with Franklin or Eleanor, followed by Zero or more repeating wildcard values (allows alot for middle names haha), a whitespace and ends with Roosevelt and a closing $ for ends as


//Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces. : Reuse Patterns Using Capture Groups
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result_rpnm = reRegex.test(repeatNum);
// ^ with capture pattern (\d+) - 1 or more repeating digits
// followed by whitespace, a repetion of the first capture group at the start of the string - numeric, whitespace, and closing capture group that ends the string 


// Write a regex fixRegex using three capture groups that will search for each word in the string one two three. 
// Then update the replaceText variable to replace one two three with the string three two one and assign the result to the result variable. 
// Make sure you are utilizing capture groups in the replacement string using the dollar sign ($) syntax. : Use Capture Groups to Search and Replace
let str_cprp = "one two three";
let fixRegex_cprp = /([a-z]+)\s([a-z]+)\s([a-z]+)/; // Change this line - Could use \w+ to capture any word but passing a character set just to tst for fun
let replaceText = "$3 $2 $1"; // Change this line
let result_cprp = str.replace(fixRegex_cprp, replaceText);


// Remove Whitespace from Start and End
// Sometimes whitespace characters around strings are not wanted but are there. Typical processing of strings is to remove the whitespace at the start and end of it.
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;  // Change this line - \s finds whitespace at beginning (^) of string 1 or more repeating times (+), or (|) the expression can find the same whitespace at the end of the string ($), /g matching multiple times to remove all of it
let result_hsp = hello.replace(wsRegex, ''); // Change this line

