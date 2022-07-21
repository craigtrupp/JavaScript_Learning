// Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.
function translatePigLatin(str) {
    // capture 1 or more consonants at start of string
    let consRgx = /^[^aeiou]+/i;
    // if rgX tested on string returns true enter this conditions
    if(consRgx.test(str)){
      // consonants variable contains the length of the return from the match method (characters returned in regex) as well as matched characters in the variables second index stored in array to concat
      let consonants = [str.match(consRgx)[0].length, [str.match(consRgx)[0]]]
      return str
        .split("")
        .splice(consonants[0], str.length)
        .concat(consonants[1])
        .join("") + "ay";
        //str is split by individual character into array, array is mutated in place to remove the start of string w/consonants to end of string, then concatenated with beginning of matched consonants
    }
    return str + "way";
  }
  
  console.log(translatePigLatin("paragraphs"));
  console.log(translatePigLatin("california"));
  console.log(translatePigLatin("glove"));
  console.log(translatePigLatin("algorithm"));
  console.log(translatePigLatin("eight"));
  console.log(translatePigLatin("schwartz"));
  console.log(translatePigLatin("rhythm"));

// aragraphspay
// aliforniacay
// oveglay
// algorithmway
// eightway
// artzschway
// rhythmay