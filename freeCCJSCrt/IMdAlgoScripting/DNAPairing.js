// DNA Pairing
// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
    let dnaPair = [];
    for(let i = 0; i < str.length; i++){
      let pairStart = str[i];
      switch (pairStart) {
        case 'A':
          dnaPair.push([pairStart, 'T']);
          break;
        case 'T':
          dnaPair.push([pairStart, 'A']);
          break;
        case 'C':
          dnaPair.push([pairStart, 'G']);
          break;
        case 'G':
          dnaPair.push([pairStart, 'C'])
      }
    }
    return dnaPair;
  }
  
  console.log(pairElement("GCG"));
  console.log(pairElement("ATCGA"));
  console.log(pairElement("TTGAG"));
  console.log(pairElement("CTCTA"));

// [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]
// [ [ 'A', 'T' ],[ 'T', 'A' ],[ 'C', 'G' ],[ 'G', 'C' ],[ 'A', 'T' ] ]
// [ [ 'T', 'A' ],[ 'T', 'A' ],[ 'G', 'C' ],[ 'A', 'T' ],[ 'G', 'C' ] ]
// [ [ 'C', 'G' ],[ 'T', 'A' ],[ 'C', 'G' ],[ 'T', 'A' ],[ 'A', 'T' ] ]