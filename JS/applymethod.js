//The call and apply Methods
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(239, "Shruti Periwal");
lufthansa.book(635, "Aditi Sharma");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  booking: [],
};

const book = lufthansa.book;

//call method
book.call(eurowings, 23, "Ankita");
console.log(eurowings);

book.call(lufthansa, 239, "Shruti Maheshwari");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Line",
  iataCode: "LX",
  booking: [],
};
book.call(swiss, 765, "Anisha");
console.log(swiss);

//Apply Method -  not use in modern java script we have better methods
const flightData = [583, "Anita Sharma"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//The Bind Method
console.log("------------------------THE BIND METHOD------------------------");
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven Williams");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Shrut Periwal");
bookEW23("Ansihka Sharma");

//With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPLane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
lufthansa.buyPLane();

//document.querySelector('.buy').addEventListener('click', lufthansa.buyPLane.bind(lufthansa));

//Partial Applications - it means we can pre set parameters
console.log(
  "--------------------------PARTIAL PARAMETERS----------------------"
);

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
//addVat = value => value + value * 0.23;

console.log(addVat(100));
console.log(addVat(23));

//Challenge
const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate ;
    }    
}
const addVat2 = addTaxRate(0.23);
console.log(addVat(100));
console.log(addVat(23));

//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
console.log('----------------IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)----------------');
const runOnce = function() {
  console.log('This will never run again');
}
runOnce();
//IIFE
(function() {
  console.log('This will never run again');
})();

//for arrow functions
(() => console.log('This will also never run again'))();