//Default Parameters
console.log('------Default Parameters------')
const bookings = [];
const createBookings = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
    //setting default values - ES5
    //numPassengers = numPassengers || 1;
    //price = price || 199;
    const booking = {
        flightNum,
        numPassengers,
        price
    };
    console.log(booking);
    bookings.push(booking);
};
createBookings('LH123');
createBookings('LH123',2,800);
createBookings('LH123' ,2);
createBookings('LH123', 3);

//setting the parameters as undefined
createBookings('LH123',undefined, 1000);

//how passing arguments works: values vs referenceh
console.log('-----How passing arguments works: values vs reference-----')

const flight = 'LH234';
const shruti = {
    name : 'Shruti Periwal' ,
    passport : 24356484909
}

const checkIn = function(flightNum , passenger) {
    flightNum = 'LH999';
    passenger.name = 'Miss ' + passenger.name;

    if(passenger.passport === 24356484909) {
        console.log('checkIn')
    } else {
        console.log('checkIn failed');
    }
}
checkIn(flight , shruti);
console.log(flight);
console.log(shruti);

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 100000);
}
newPassport(shruti);
checkIn(flight, shruti);

//Function accepting  callback functions
console.log('-----------Function accepting  callback functions------------');

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}
const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

//Higher order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best', upperFirstWord);

transformer('JavaScript is the best', oneWord);

//Js uses callbacks all the time
//const high5 = function() {
//    console.log('Hi');
//}
//document.body.addEventListener('click', high5);
//['shruti','preeti','smithi'].forEach(high5);

//Functions returning Functions
console.log('--------Functions returning Functions--------');

const greet = function(greetings) {
    return function(name) {
        console.log(`${greetings} ${name}`);
    };
};

const greeterHey = greet('Hey');
greeterHey('Shruti');
greeterHey('Shruti Periwal');

greet('Hello')('Shruti');

//using arrow functions
const greetArr = greetings => name => console.log(`${greetings} ${name}`);
greetArr('Hii')('Shruti');