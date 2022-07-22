// Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.
function fearNotLetter(str) {
    let alphabetSeq = "abcdefghijklmnopqrstuvwxyz"
    let firstLetter = alphabetSeq.search(str.slice(0,1));
    let seqString = alphabetSeq.slice(firstLetter, firstLetter + str.length);
    let confirmCounter = 0;
    for(let i = 0; i < str.length; i++){
      let testCharacter = str.slice(i, i + 1);
      let seqCharacter = seqString.slice(i, i + 1);
      if(testCharacter != seqCharacter){
        confirmCounter = 0
        return seqCharacter;
      } else {
        confirmCounter += 1;
      }
    }
    if(confirmCounter == seqString.length){
      return undefined;
    }
  }
  
  console.log(fearNotLetter("abce"));
  console.log(fearNotLetter("stvwx"));
  console.log(fearNotLetter("bcdf"));
  console.log(fearNotLetter("abcdefghjklmno"));
  console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

// d
// u
// e
// i
// undefined