//Creating a Dates

const now = new Date();
console.log(now);

//console.log(new Date('Aug 02 2020 18:05:41'));

console.log(new Date(2022, 10, 19, 15, 23, 5));
console.log(new Date(2022, 10, 31)); 

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

//Working with dates
const future = new Date(2022, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth()); //0 based
console.log(future.getDate());
console.log(future.getDay()); // day of week
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(Date.now());

future.setFullYear(2040);
console.log(future)