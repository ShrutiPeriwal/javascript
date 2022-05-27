//SIMPLE ARRAY METHOD:
console.log('----------SIMPLE ARRAY METHOD-----------');
console.log('----------SLICE METHOD-----------');  //it doesn't muted the original array
let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));

console.log('----------SPLICE METHOD-----------'); //it muted the original array
console.log(arr.splice(1,2));
console.log(arr);

console.log('----------REVERSE METHOD-----------'); // it muted the original array
arr = ['a', 'b', 'c', 'd', 'e', 'f'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

console.log('----------CONCAT METHOD-----------'); 
const letters = arr.concat(arr2);
console.log(letters);
//console.log([...arr, ...arr2]);  We can also use this

console.log('----------JOIN METHOD-----------');
console.log(letters.join(' - ')); 

console.log('----------AT METHOD-----------');
const arrr = [23, 11, 64];
//console.log(arrr[0]); 
console.log(arrr.at(0));
//console.log(arrr[arrr.length - 1]);
console.log(arrr.slice(-1)[0]);
console.log(arrr.at(-1));
console.log('Shruti'.at(0));

//LOOPING ARRAY: FOR EACH
console.log('-------------LOOPING ARRAY: FOR EACH-------------');
const movements = [200, 450, -400, 3000, -650, 130, 70, 1300];

//for (const movement of movements) {
//    if(movement > 0) {
//        console.log(`You deposited ${movement}`);
//    } else {
//        console.log(`You withdraw ${Math.abs(movement)}`);
//    }
//}

movements.forEach(function(movement) {
    if(movement > 0) {
        console.log(`You deposited ${movement}`);
    } else {
        console.log(`You withdraw ${Math.abs(movement)}`);
    }
})

movements.forEach(function(mov, i) {
    if(mov > 0) {
        console.log(`Movement ${i + 1}: You deposited ${mov}`);
    } else {
        console.log(`Movement ${i + 1}: You withdraw ${Math.abs(mov)}`);
    }
})

//FOR EACH WITH MAPS AND SETS
console.log('----------------FOR EACH WITH MAPS AND SETS-------------------');
//Maps
const currencies = new Map([
    ['USD', 'United States Dollar'] ,
    ['EUR', 'Euro'] , 
    ['GBP', 'Pound Sterling'] ,
]);
currencies.forEach(function(value, key) {
    console.log(`${key}: ${value}`);
})

//Sets
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique)
currenciesUnique.forEach(function(value, key) {
    console.log(`${key}: ${value}`)
});