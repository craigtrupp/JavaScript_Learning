// Telephone Number Validator
// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
function telephoneCheck(str) {
    let regEx = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/
    // first capture group uses '?' and a capture group () to capture the 1 country code followed by a space (1 or zero times) - optional check and once if found : (1\s?)?
    // two checks in first sequence to capture it 1 time if seen or neither with '?' matches the previous token between zero and one times
    // Second group is either 3 digits or the use of three digits in parentheses with the characters '(' and ')' escaped with \ : (\d{3}|\(\d{3}\))
    // Next is a character set that captures and escaped dash '-' or a space (zero or 1 time) - optional check and once if found : [\-\s]?
    // Just three digits cought after that (all same for accepted patterns) : \d{3}
    // Similar to match to escaped dash or space so same character set used above prior to last 4 digits - optional check and once if found : [\-\s]?
    // Lastly its just the 4 digits and uniform across all paterns to finish the expression : \d{4}
    // Finally an explicit declaration of the ^ and $ detail that in the string I want only these options found in any string (explicit start & finish)
    // This negates capturing like expressions or wrong starting country codes
    // https://regex101.com/
    return regEx.test(str) 
  }
  console.log(telephoneCheck("1 555-555-5555"));
  console.log(telephoneCheck("0 (757) 622-7382"));
// debugging
//   function telephoneCheck(str) {
//     //create six regular expressions
//     let regExes = [/\((\d{3})\)\d{3}-\d{4}/, /\d{3}-\d{3}-\d{4}/, /\((\d{3})\)\s{1}\d{3}-\d{4}/, /\d{3}\s{1}\d{3}\s{1}\d{4}/, 
//     /\d{10}/, /1{1}\s{1}\d{3}\s{1}\d{3}\s{1}\d{4}/]
//     let regExmatch = []
//     for(let i = 0 ; i < regExes.length; i++){
//       if(regExes[i].test(str)){
//         regExmatch.push(i, regExes[i])
//       }
//       else {
//         console.log(`${i} was not a match`)
//       }
//     }
//     return regExmatch
//   }