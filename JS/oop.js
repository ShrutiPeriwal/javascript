'use strict';

//Constructor function and the new operator
const Person = function(firstName, birthYear) {
    //Instance Properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    //never create a method inside a Constructors
    //this.calcAge = function() {
    //    console.log(2022 - this.birthYear);
    //};
};

const shruti = new Person('Shruti', 2001);
console.log(shruti);

console.log(shruti instanceof Person);