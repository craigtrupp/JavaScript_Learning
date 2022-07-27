// Roman Numeral Converter
// Convert the given number into a roman numeral.

// Roman numerals	Arabic numerals
// M	1000
// CM	900
// D	500
// CD	400
// C	100
// XC	90
// L	50
// XL	40
// X	10
// IX	9
// V	5
// IV	4
// I	1
// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
    let num_provided = +num;
    let build_num = 1;
    let rom_provided = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
    let rom_num = [];
     function findLowest(i){
       for (const[key, value] of Object.entries(rom_provided)){
       //console.log(`${key}: ${value} - ${num_provided} : type ${typeof num_provided}`);
         if(i == num_provided){
           let rom_key = Object.keys(rom_provided).find(key => rom_provided[key] === i);
           build_num = rom_provided[rom_key];
           rom_num.push(rom_key);
           return;
         }
       }
     }
     while((build_num <= num_provided) && rom_num.length < 1){
       findLowest(build_num);
     }
     return [rom_num, rom_num.join("")]
   }
   
   console.log(convertToRoman(1));
  // [ [ 'I' ], 'I' ]