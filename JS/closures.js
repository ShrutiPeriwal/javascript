const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passenger`);
    }
}
const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);

let f;
const g = function() {
    const a = 23;
    f = function() {
        console.log(a *2);
    }
}

const h = function() {
    const b = 777;
    f = function() {
        console.log(b *2);
    }
}
g();
f();
//re-assigning f function
h();
f();