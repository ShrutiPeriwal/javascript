const resturant = {
    name: 'Classisco Italiano' ,
    location: 'Via Angelo Tavanti 23, Firenze, Italy' , 
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'] , 
    starterMenu: ['Facaccia', 'Bruschetta', 'GarlicBread', 'Caprese Salad'] , 
    mainMenu: ['Pizza', 'Pasta', 'Risotto'] ,
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, //Open 24 Hours
            close: 24,
        },
    },

    order: function(starterIndex, mainIndex) {
        return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function({ starterIndex = 1 ,
         mainIndex = 0 ,
         time = '20.00' ,
         address,
        }) {
        console.log(`Order Received!!!!! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
};
resturant.orderDelivery({
    time: ' 22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterMenu: 2,
});
resturant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1,
})
//destrucing objects 
const {name, openingHours, categories} = resturant;
console.log(name, openingHours, categories);

//giving new variables name
const { name: resturantName,
     openingHours: hours,
      categories: tags} = resturant;
console.log(resturantName, hours, tags);

//setting default values
const{menu = [] ,starterMenu: starters = [] } = resturant;
console.log(menu, starters);

//mutating variables while destrucing objects
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};

({a, b} = obj);
console.log(a, b);              // 23 7

//nested objects 
const {fri: {open, close}} = openingHours;
console.log(open, close);               //11, 23