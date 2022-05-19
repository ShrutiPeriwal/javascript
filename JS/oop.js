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

//Prototype 
console.log(Person.prototype);

Person.prototype.calcAge = function() {
    console.log(2022 - this.birthYear);
};
shruti.calcAge();

console.log(shruti.__proto__);
console.log(shruti.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(shruti));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(shruti.species);

console.log(shruti.hasOwnProperty('species'));
console.log(shruti.hasOwnProperty('firstName'));