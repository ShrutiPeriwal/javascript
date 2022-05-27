"use strict";

const resturant = {
  name: "Classisco Italiano",
  location: "Via Angelo Tavanti 23 , Firenze, Italy",
  Categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//destrucing an array
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr); //original array is not affected

let [main, , secondary] = resturant.Categories; //if we want to access first and third categories
console.log(main, secondary);

//switching variables
//without destrucing an array
//const temp = main;
//main = secondary;
//secondary = temp;
//console.log(main, secondary);

//with destrucing an array
[main, secondary] = [secondary, main];
console.log(main, secondary);

//console.log(resturant.order(2,0));
//destrucing an array
//receive 2 return values from a function
const [starter, mainCourse] = resturant.order(2, 0);
console.log(starter, mainCourse);

//what happens if we have nested array - nested destrucing
const nested = [2, 3, [5, 6]];
//const [ i , ,j] = nested;
//console.log(nested, i, j);
const [i, ,[j, k]] = nested;
console.log(i,j,k);

//Default values 
const [p = 1, q = 1, r = 1] = [8 , 9];
console.log(p,q,r);