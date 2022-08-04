// Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

// function checkCashRegister(price, cash, cid) {
//     let difference = cash - price;
//     let currency_values= {'PENNY': 1, 'NICKEL':5, 'DIME': .1, 'QUARTER':.25, 'ONE':1, 'FIVE':5, 'TEN':10, 'TWENTY':20, 'ONE HUNDRED':100}
//     let running_change = {'difference': [difference], 'change_tendered':[0]}
//     let changeTotal = function(){
//         return running_change['change_tendered'].reduce((partialSum, a) => partialSum + a);
//     }
//     function getChange(target){
//         for(let i = cid.length-1; i >= 0; i--){
//             for (const[key, value] of Object.entries(currency_values)){
//                 if(value <= target){
//                     running_change['difference'].unshift(running_change.difference[0] - value);
//                     running_change['change_tendered'].push(value);
//                     return;
//                 }
//             }
//         }
//     }
//     while(changeTotal() != difference){
//         getChance(running_change['difference'][0]);
//     }
//     return running_change;
//   }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  //should return {status: "OPEN", change: [["QUARTER", 0.5]]}
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  //{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
  
  
  // while(change() < cash - price){change()}
  // cash - price (difference aka change required)
  // {'PENNY' : 01, 'NICKEL' : 05}