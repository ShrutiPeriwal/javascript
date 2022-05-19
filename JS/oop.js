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

console.log('--------------------------------')
const arr = [3, 5, 7, 8, 9, 10, 11];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function() {
    return [...new Set(this)];
};
console.log(arr.unique());

//ES6 CLASSES
console.log('----------ES6 CLASSES----------');
//class declarations
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    //Methods will be added to .prototype property
    calcAge() {
        console.log(2022 - this.birthYear);
    }
    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    get age() {
        return 2022 - this.birthYear;
    }

    //Set a property that already exists
    set fullName(name) {
        if(name.includes(' ')) {
            this._fullName = name;
        } else {
            console.log(`${name} is not a full name`);
        }
    }

    get fullName() {
        return this._fullName;
    }
}

const ShrutiPeriwal = new PersonCl('Shruti Periwal', 2001);
console.log(ShrutiPeriwal);
ShrutiPeriwal.calcAge();
console.log(ShrutiPeriwal.age);
//PersonCl.prototype.greet = function() {
//    console.log(`Hey ${this.firstName}`);
//}
ShrutiPeriwal.greet();

//1.classes are not hoisted
//2. Classes are also first-class citizens
//3. Classes are exectuted in strict mode

//Setters and Getters property
console.log('--------Setters and Getters--------');
const account = {
    owner : 'shruti',
    movements : [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    },
};
console.log(account.latest);
account.latest = 5000;
console.log(account.movements);