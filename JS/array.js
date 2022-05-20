// Arrays

//const friends = ['Michael', 'Steven', 'Peter'];
//console.log(friends);

//another way to declare array
//const y = new Array(1991, 1984, 2000, 2001);
//console.log(y);

//console.log(friends[0]); //Accessing first element Michael
//console.log(friends[2]); // Peter

//console.log(friends.length); //3

//console.log(friends[friends.length-1]); // Accessing last element - Peter

//friends[2] = 'Jay'; //accesing new element in array
//console.log(friends);

//friends = ['Bob' , 'Alice']; //we cannot change the whole array it will give an error

//const firstName = 'Jonas';
//const jonas = [firstName,'Sharma', 2037 - 1991 , 'teacher',friends];
//console.log(jonas);
//console.log(jonas.length);

//Some Examples
//const calcAge = function (birthYear) {
  //  return 2037 - birthYear;
//}
//const years =[1990, 1967, 2002, 2010, 2018];

//const Age1 = calcAge(years[0]);
//const Age2 = calcAge(years[1]);
//const Age3 = calcAge(years[years.length - 1]);

//console.log(Age1);

//const Ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
//console.log(Ages);

//Methods of Arrays 

const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay'); // Adds element at the end of array, push is also a function so it can also return length of a new array
console.log(friends);
console.log(newLength);

friends.unshift('John'); // Adds element at the beginning. just like push method it also returns length a new array
console.log(friends);

//Removes elements
friends.pop(); //removes last element . this methos doesn't return the length it returns the removed element
const popped = friends.pop(); //this time it removes the second last element
console.log(popped);
console.log(friends);

friends.shift(); // removes first element
console.log(friends);

console.log(friends.indexOf('Steven'));  // this method tells the location of element in array
console.log(friends.indexOf('bob')); // if element is not their in this case it should return -1

//ES6 method - include - in case element is their then it returns true , if element is not their then it returns false
friends.push(23); // this is number
console.log(friends.includes('Steven'));
console.log(friends.includes('bob'));
console.log(friends.includes('23')); //this is string .. it checks with strict equality this means that it does not do type conversion

if(friends.includes('Peter') ) {
    console.log('You have a friend called Peter'); // false
}

if(friends.includes('Steven') ) {
    console.log('You have a friend called Steven'); // it executes
}

//var countries = ["INDIA","USA","JAPAN","RUSSIA"];

//var state = new Array("Rajasthan","Bihar","Mumbai","Delhi");

//console.log(state[2]); // accessing the elements

//console.log(state.length);

//state[0] = "Punjab"; // repacing the elements
//console.log(state);

//var user = ["shruti", "shruti@gmail.com", 4, 34, true];
//console.log(user);

//user.pop(); //it removes the last value
//console.log(user); 

//user.unshift("new value"); // adding value at first in the array and it will shift rest of the value
//console.log(user);

//user.shift(); // it removes the new value from the array
//console.log(user);

//console.log(user.indexOf("neww")); // if element doesn't exists it shows -1

//console.log("shruti");
//console.log(Array.from("shruti")); // converting string to array

//lecture number 21 
//Callback and arrow function introduction in array
var isEven = (element) => {
    // if(element % 2 == 0) {
      //   return true;
     //}
     //return false;
     return element % 2 == 0;
 }
 //console.log(isEven(2));
 
 
 //var result = [2,3,6,8].every(isEven); // we don't want to run this function we want to reference
                     //on to that whenever this every goes onto every single method it 
                     //knows where to look for the function we are not running for it.
 //console.log(result);
 
 //callback functions
 //var result = [2,4,6,8].every((e) => {
   //  return e % 2 === 0;
 //});
 //console.log(result);
 
 // in case we don't want to use return
 //var name = [2,4,8,6].every((e) => e % 2 === 0);
 //console.log(name);
 
 //lecture number 22 
 //fill and filter in array
 
 //var testArray = [2,4,6,8,5,7,9];
 
 //console.log(testArray.fill("s",2,5));
 
 //const myNumber = [23,24,25,44,55,78,98,65,43];
 
 //const myresult = myNumber.filter((num) => num!=55);
 //console.log(myresult);
 
 //lecture number 22 
 // slice and splice
 var users = ["Ted","Tim","Ton","Sam","Sor","Sod"];
 //console.log(users.slice(1,3));
 //console.log(users.slice(1));
 
 //users.splice(1,2,"HI");
 users.splice(1,3,"HI","BYE");
 console.log(users);