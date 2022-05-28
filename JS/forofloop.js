//For-of loops
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sund'];
//Creating a seperate object
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, //Open 24 hours
    close: 24,
  },
};

const resturant = {
  name: "Classisco Italiano",
  location: "Via Angelo Tavanti 23 , Firenze, Italy",
  Categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20.00", address }) {
    console.log(
      `Order Received!!!!! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  //ES6 Enhanced object Literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1} and ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

const menu = [...resturant.starterMenu, ...resturant.mainMenu];

for (const item of menu) {
  console.log(item);
}

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
//console.log([...menu.entries()]);

//Using destrucing an array
for (const [i, ell] of menu.entries()) {
  console.log(`${i + 1}: ${ell}`);
}

//Enhanced object Literals

console.log("-----------------Enhanced object Literals ----------------");

console.log(resturant);

//Looping Objects: Object keys, values and entries
console.log('-----------------Looping objects ----------------');

//Property Names --------------------------------
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days.`;
for (const day of properties) {
  openStr += ` ${day}`;
}
console.log(openStr);

//Property Values------------------
const values = Object.values(openingHours);
console.log(values);

//Entries object-----------

const entries = Object.entries(openingHours);
//console.log(entries);

for (const x of entries) {
  console.log(x);
}