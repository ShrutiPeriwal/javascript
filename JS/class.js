//Inheritance Between 'Classes' : Constructor Functions

const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function() {
    console.log(2022 - this.birthYear);
};

const Student = function(firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};

Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and study ${this.course}`);
}

const shruti = new Student('Shruti', 2001, 'BCA');
shruti.introduce();
shruti.calcAge();

console.log(shruti instanceof Student);
console.log(shruti instanceof Person);
console.log(shruti instanceof Object);
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

console.log('-----Encapsulation-----');

class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this._movements = [];
      //  this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

//Public interface
getMovements() {
    return this._movements;
}

deposit(val) {
    this._movements.push(val);
}

withdraw(val) {
    this.deposit(-val);
}

approveLoan(val) {
    return true;
}

requestLoan(val) {
    if(this.approveLoan(val)) {
        this.deposit(val);
        console.log(`Loan approved`);
    }
}
}

const acc1 = new Account('shruti', 'Rs', 1111);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1.pin);