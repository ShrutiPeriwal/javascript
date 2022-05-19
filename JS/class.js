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