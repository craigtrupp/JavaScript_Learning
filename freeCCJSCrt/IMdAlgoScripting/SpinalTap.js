// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2')
      .split(/\W|_/)
      .map(element => element.toLowerCase())
      .join('-')
  }
  
  console.log(spinalCase('This Is Spinal Tap'));
  console.log(spinalCase("thisIsSpinalTap"));
  console.log(spinalCase("The_Andy_Griffith_Show"));
  console.log(spinalCase("Teletubbies say Eh-oh"));
  console.log(spinalCase("AllThe-small Things"));

// this-is-spinal-tap
// this-is-spinal-tap
// the-andy-griffith-show
// teletubbies-say-eh-oh
// all-the-small-things