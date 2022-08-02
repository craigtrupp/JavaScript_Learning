// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
    let characters = [];
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for(let i = 0; i < str.length; i++){
      if(/\w/i.test(str[i])){
        let index = alphabet.indexOf(str[i].toLowerCase())
        if(index < 13){
          characters.push(alphabet[index + 13]);
        }
        else{
          characters.push(alphabet[index - 13]);
        }
      } else {
        characters.push(str[i]);
      }
    }
    return characters.join('').toUpperCase();
  }
  
  console.log(rot13("SERR PBQR PNZC"));
  console.log(rot13("SERR CVMMN!"));
  console.log(rot13("SERR YBIR?"));
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));

  
// FREE CODE CAMP
// FREE PIZZA!
// FREE LOVE?
// THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.