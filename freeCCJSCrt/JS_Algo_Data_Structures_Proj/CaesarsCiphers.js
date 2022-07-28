// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
    //let alphabet = [{'a':14, 'b':15, 'c':16, 'd':17, 'e':18, 'f':19, 'g':20, 'h':21, 'i':22, 'j': 23, 'k': 24, 'l': 25, 'm':26, 'n':13}];
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    //alphabet.indexOf(str[0]) < 13 (alphabet.indexOf(str[i] + 13)) count backwards if .indexOf(str[i]) = iterator in loop ; (if(str[i].test(/alphabet only/) {if}))
    //nest this first alpha regex if(str[i] < 13) {let lookforward = alphabet.indexOf(str[i]) + 13; new_str.concat(alphabet[lookforward])} break;
    // else (non-alpha) {new_str.concat(str[i])}
    return str;
  }
  
  rot13("SERR PBQR PNZC"); // "FREE CODE CAMP"