//Coding Challenge : 1

/*
1. Use a constructor function to implement a Car. A Car has a make and a speed property. The speed property is the current speed of the car in km/h:
2. Implementan 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console.   
3. Implement a 'barke' method that will decrease the car's speed by 5, and log the new speed to the console.
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them. 

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
*/

//const Car = function(make, speed) {
//    this.make = make;
//    this.speed = speed;
//};
//Car.prototype.accelerate = function () {
//    this.speed += 10;
//    console.log(`${this.make} is going at ${this.speed} km/h`);
//}
//Car.prototype.barke = function() {
//    this.speed -= 5;
//    console.log(`${this.make} is going at ${this.speed} km/h`);
//}
//const BMW = new Car('BMW', 50);
//const Mercedes = new Car('Mercedes', 70);

//BMW.accelerate();
//BMW.barke();
//BMW.accelerate();

//Coding Challenge : 2
/* 
1. Re-Create challenge 1, but this time using an ES6 class :
2. Add a getter called 'speedUS' which returns the current speed in min/h (divide by 1.6).
3. Add a setter called 'speedUS' which sets the current in min/hr (but converts it to km/hr efore string the value, by multiplying the input by 1.6).
4. Create anew car and experiment with the accelerate and barke methods, and with the getter and setter.

DATA CAR 1: 'Ford' going to 120 km/hours
*/
class CarCl {
    constructor(make, speed) {
    this.make = make;
    this.speed = speed;
}
accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}
barke() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

get speedUS() {
    return this.speed / 1.6;
}

set speedUS(speed) {
    this.speed = speed * 1.6;
}
}

const ford = new CarCl('ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.barke();
ford.speedUS = 50;
console.log(ford);