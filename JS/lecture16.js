//lecture 16
//global context in java script
//sayHello();
//function sayHello() {
 //   console.log("hello shruti");
//}

if(2 === "2") {
    console.log("this is true");
}

//var myName = "shruti";
//if(myName === window.myName) {  //it gives an error that window is not defined but in browser it run successfully bcx it is an global context 
  //     console.log("this is true statement");
//}


//lecture number 17
//Execution Context - Variable Object , Scope chain , this keyword
//execution context rules - (1) Function declarations are scanned and made available
// (2) variable declarations are scanned and made undefined

function tipper(a) {
    var bill = parseInt(a); // it converts the value to integer
    console.log(bill+5);
}
tipper("5");

function bigtipper(a) {
    var bill = parseInt(a); // it converts the value to integer
    console.log(bill+15);
}
bigtipper("200");

//bigbag("20"); // its give an error remember the rule number 2
//var bigbag =  function(a) {
  //  var bill = parseInt(a); // it converts the value to integer
    //console.log(bill+5);
//}


var bigbag =  function(a) {
    var bill = parseInt(a); // it converts the value to integer
    console.log(bill+5);
}
bigbag("20"); // this run successfully we can declare function through variable by this way


console.log(name); // its give undefined
var name = "shruti";

function sayName() {
    var name = "Mrs. S";
    console.log(name);
}
sayName(); // new execution context loaded 
console.log(name);