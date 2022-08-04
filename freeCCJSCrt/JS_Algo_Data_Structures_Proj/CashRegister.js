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


function checkCashRegister(price, cash, cid) {
    let currency_values= {'PENNY': 1, 'NICKEL':5, 'DIME': 10, 'QUARTER':25, 'ONE':100, 'FIVE':500, 'TEN':1000, 'TWENTY':2000, 'ONE HUNDRED':10000}
    // Floats are the worst ... let's not deal with them
    let diffSum = (cash * 100) - (price * 100);
    let change = [];
    let status = '';
    let chngSumCheck = diffSum;
    // this value will be set after the forEach runs below to calculate total sum of all actual cash in Drawer (3rd) argument
    let cidSum = 0;
    // make sure CID is available for all 2D  "nickel" .. etc type elements, else filter out currency 'key'
    let actualCID = cid.filter(element => element[1] !== 0).reverse();
    
    actualCID.forEach(element => {
        let currency = element[0];
        let currencySum = element[1] * 100;
        cidSum += currencySum;
        // element[1] = element[1] * 100; would put cid elements in same scale as other currency values
        let amount = 0;
        while(diffSum >= currency_values[currency] && currencySum > 0){
            amount += currency_values[currency];
            diffSum -= currency_values[currency];
            currencySum -= currency_values[currency];
        }
        if(amount !== 0){
            change.push([currency, amount / 100]);
        }
    });
    //return [actualCID, cidSum, difference];
    if(diffSum > 0){
        status = 'INSUFFICIENT_FUNDS';
        change = [];
    } else if (diffSum == 0 && chngSumCheck == cidSum){
        status = 'CLOSED';
        change = cid;
    } else {
        status = 'OPEN';
    }
    return {'status' : status, change : change}
  }
  
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  //should return {status: "OPEN", change: [["QUARTER", 0.5]]} (Current Iteration Below)
  // [ [ [ 'PENNY', 1.01 ],
//     [ 'NICKEL', 2.05 ],
//     [ 'DIME', 3.1 ],
//     [ 'QUARTER', 4.25 ],
//     [ 'ONE', 90 ],
//     [ 'FIVE', 55 ],
//     [ 'TEN', 20 ],
//     [ 'TWENTY', 60 ],
//     [ 'ONE HUNDRED', 100 ] ],
//   33541,
//   50 ]
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  //{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
  
  