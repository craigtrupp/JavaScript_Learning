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
    let build_num = num_provided <=1 ? 1 : num_provided;
    let rom_provided = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
    let rom_num = { "sum" : [0], "numerals" : [], "seq" : [build_num] };
    let running_sum = function(){
      return rom_num['sum'].reduce((partialSum, a) => partialSum + a);
    }
    //console.log(rom_num['sum'].push(1))
     function findLowest(i){
       for (const[key, value] of Object.entries(rom_provided)){
            if(Object.values(rom_provided).indexOf(i) > -1 && rom_num['numerals'].length < 1){
            // Find key with .find that matches i our value passed into initial function
            let rom_key = Object.keys(rom_provided).find(key => rom_provided[key] === i);
            build_num = rom_provided[rom_key];
            rom_num['sum'].push(rom_provided[rom_key]);
            rom_num.numerals.push(rom_key);
            return;
            }
            if(running_sum() != num_provided){
                if(i >= value){
                    rom_num['seq'].unshift(i - value);
                    rom_num['sum'].push(value);
                    rom_num['numerals'].push(key);
                    return;
                }
            }
        }
    }
     // this will have to an or handler for longer lengths
     while(rom_num['numerals'].length < 1 || running_sum() != num_provided){
       findLowest(rom_num['seq'][0]);
     }
     return [rom_num, running_sum()];
}
console.log(convertToRoman(4)); //[ { sum: [ 0, 4 ], numerals: [ 'IV' ], seq: [ 4 ] }, 4 ]
console.log(convertToRoman(2)); // [ { sum: [ 0, 1, 1 ], numerals: [ 'I', 'I' ], seq: [ 0, 1, 2 ] }, 2 ]
console.log(convertToRoman(7)); // [ { sum: [ 0, 5, 1, 1 ], numerals: [ 'V', 'I', 'I' ], seq: [ 0, 1, 2, 7 ] }, 7]
console.log(convertToRoman(12)); // [ { sum: [ 0, 10, 1, 1 ], numerals: [ 'X', 'I', 'I' ], seq: [ 0, 1, 2, 12 ] }, 12]
