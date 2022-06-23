// Apply the regex myRegex on the string myString using the .test() method.
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); 

// Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result_w = waldoRegex.test(waldoIsHiding);


//Ignore Case Flag
let myString_i = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result_i = fccRegex.test(myString);