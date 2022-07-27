function palindrome(str) {
    let pal_count = [];
    let regEx = /(?!_)\w/gi
    let palindrome = str.match(regEx)
      .map(element => element.toLowerCase());
    let pal_backward = palindrome.slice().reverse();
    for(let i = 0; i < palindrome.length; i++){
      let char_codes = [palindrome[i].charCodeAt(0), pal_backward[i].charCodeAt(0)]
      if((palindrome[i] == pal_backward[i]) && (char_codes[0] == char_codes[1])){
        pal_count.push(true);
      }
    }
    return pal_count.length == palindrome.length ? true : false;
  }
  
  console.log(palindrome("eye"));
  console.log(palindrome("not a palindrome"));
  console.log(palindrome("0_0 (: /-\ :) 0-0"));
  console.log(palindrome("_eye"));
  console.log(palindrome("A man, a plan, a canal. Panama"));
  console.log(palindrome("My age is 0, 0 si ega ym."));
  console.log(palindrome("1 eye for of 1 eye."));

// true
// false
// true
// true
// true
// true
// false