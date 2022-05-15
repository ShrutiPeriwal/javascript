//THE MAP METHOD 

'use strict';

//DATA 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

//const movementsUSD = movements.map(function (mov) {
 //  return mov * eurToUsd;
//});
//console.log(movements);
//console.log(movementsUSD);


//Using for of loop 
const movemnetsUSDfor = [];
for(const mov of movements) {
    movemnetsUSDfor.push(mov * eurToUsd);
}
console.log(movemnetsUSDfor);

//using arrow function
const movementsUSD = movements.map(mov => mov *  eurToUsd);
console.log(movementsUSD);

const movementsDescriptions = movements.map((mov, i) =>

   `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(mov)};`
   // if(mov > 0) {
    //    return `Movements ${i +1}: You deposited ${mov}`;
   // } else {
   //     return `Movements ${i + 1}: You withdraw ${Math.abs(mov)}`;
   // }
);
console.log(movementsDescriptions);

//Filter Method
const deposit = movements.filter(function(mov) {
    return mov  > 0;
})
console.log(movements);
console.log(deposit);

//using for of loops - positive values
const depositFor = [];
for(const mov of movements) { 
    if (mov > 0) {
        depositFor.push(mov);
    }
}
console.log(depositFor);

//using for of loops - negative values
const withdrawals = [];
for(const mov of movements) {
    if(mov < 0) {
        withdrawals.push(mov);
    }
}
console.log(withdrawals);

//reduce method
console.log(movements);

//accmulator is like a snowball
const balance = movements.reduce(function(acc, cur, i, arr) {
    console.log(`Iteration ${i}: ${acc}`);
    return acc + cur
}, 0);
console.log(balance);

//using for of loop 
let balance2 = 0;
for(const mov of movements) {
    balance2 += mov
}
console.log(balance2);

//using arrow functions
const balance3 = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance3);