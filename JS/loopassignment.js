/*
Let's improve the tip calculator even more , this time using loops !

1. Create an array 'bills' containing all 10 test bill values.
2. Create empty array for the tips and the totals ('tips' and 'totals').
3. Use the 'calcTip' function wew wrote before (no need to repeat) to calculate tips and total
values (bill + tip) for every bill value in the bill array. Use a for loop to perform the 10 calculations !
TEST DATA - 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52.

HINT - Call calcTip in the loop and use the push method to add values to the tips and totals array.

4. BONUS : write a function 'calcAverage' which takes an array called 'arr' as an argument, This function calculates 
the average of all numbers in the given array.
STEPS - 
1. first you will need to add up all values in the array. To do the addition , start by creating a varaible 'sum' that
starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable.
This, way by the end of the loop , you have all values added together.
2. To calculate the average, divide the sum you calculated before by the length of the array (bcz that's the number of elements)
3. Call the function with the 'totals' array. 
*/
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86,52];
const calcTip = function(bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
}

const tips = [];
const totals = [];
 for ( let i=0; i<bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
 }
 console.log(bills, tips, totals);

 //bonus challenge
 const calcAverage = function(arr) {
     let sum = 0;
     for(let i = 0; i<arr.length; i++) {
         sum = sum + arr[i];
         //sum += arr[i];
     }
     //console.log(sum);
     return sum / arr.length;
 }
 console.log(calcAverage([2,3,7]));
 console.log(calcAverage(totals));
 console.log(calcAverage(tips));

