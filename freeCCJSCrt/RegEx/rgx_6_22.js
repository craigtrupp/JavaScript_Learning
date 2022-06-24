// Apply the regex myRegex on the string myString using the .test() method.
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); 

// Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result_w = waldoRegex.test(waldoIsHiding);


// Ignore Case Flag
let myString_i = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result_i = fccRegex.test(myString);


// Apply the .match() method to extract the string coding.
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/i; // Change this line
let result_ex = extractStr.match(codingRegex); // Change this line


// Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar. : Find More Than the First Match
// Note : You can have multiple flags on your regex like /search/gi
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; // Change this line
let result_star = twinkleStar.match(starRegex); // Change this line
// match function can take the expression syntax directly instead of being attributed a variable
console.log(result_star);
console.log(twinkleStar.match(/twinkle/gi))
[ 'Twinkle', 'twinkle' ] // return
[ 'Twinkle', 'twinkle' ] // return


// Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character. : Match Anything With Wildcard Period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/i; // Change this line
let result_un = unRegex.test(exampleStr);

// console.log(result_un) returns a simple true boolean value and not the match



// Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample. : Match Single Character with Multiple Possibilities
// Note: Be sure to match both upper- and lowercase vowels.
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // Change this line
let result_vrgx = quoteSample.match(vowelRegex); // Change this line

//console.log(result_vrgx); returns array of all found vowels (upper or lower in passed string to match method) ['A', 'e', 'i', 'o', 'U' ... ])


// Match all the letters in the string quoteSample. : Match Letters of the Alphabet
// Note: Be sure to match both uppercase and lowercase letters.
let quoteSample_alpha = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result_alpha = quoteSample.match(alphabetRegex); // Change this line


// Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex. : Match Numbers and Letters of the Alphabet
let quoteSample_an = "Blueberry 3.141592653s are delicious.";
let myRegex_an = /[h-s2-6]/ig; // Change this line
let result_an = quoteSample_an.match(myRegex_an); // Change this lines
// Logs al matched (and repeating if found) characters in the albphabet and numeric range provided


// Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex. : Match Single Characters Not Specified
let quoteSample_mscns = "3 blind mice.";
let myRegex_mscns = /[^aeiou0-9]/ig; // Change this line
let result_mscns = quoteSample_mscns.match(myRegex_mscns); // Change this line

// You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign. : Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
let myRegex_ds = /s+/gi; // Change this line
let result_ds = difficultSpelling.match(myRegex);


// For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes. 
// Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters in chewieQuote. 
// Your regex does not need flags or character classes, and it should not match any of the other quotes.
// Only change code below this line - https://www.youtube.com/watch?v=tbYJI4uvS-s&t=26s
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line
let result_chwr = chewieQuote.match(chewieRegex);


