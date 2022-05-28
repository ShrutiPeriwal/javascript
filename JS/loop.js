//for(var i = 1; i <= 10; i++) {
  //  console.log(i);
//}
/*
const Jonas = [
    "Jonass" ,
    "Schmedtamn",
    2037 - 1991,
    "teacher",
    ["Michael","Peter","Steven"],
    "admin",
];
const types = [];
for (let i=0; i<Jonas.length; i++) {
    console.log(Jonas[i], typeof Jonas[i]);
    //types[i] = typeof Jonas[i]; //filling types array
    types.push(typeof Jonas[i]);
}
console.log(types);
const years = [1991,2007,1969,2020];
const ages = [];
for(let i =0;i<years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);
//break and continue statement
console.log("-----ONLY STRING-----");
for (let i=0; i<Jonas.length; i++) {
    if(typeof Jonas[i] != "string")
    continue;
    console.log(Jonas[i], typeof Jonas[i]);
}
console.log("-----BREAK WITH NUMBER-----");
for (let i=0; i<Jonas.length; i++) {
    if(typeof Jonas[i] == "number")
    break;
    console.log(Jonas[i], typeof Jonas[i]);
}
*/

//looping backwards and loops in loops
const Jonas = [
    "Jonass" ,
    "Schmedtamn",
    2037 - 1991,
    "teacher",
    ["Michael","Peter","Steven"],
];

for(let i = Jonas.length-1; i>=0; i--) {
    console.log(i,Jonas[i]);
}

//creating loops inside loops

for(let exercise = 1; exercise<4; exercise++) {
    console.log(`----------STARTING EXERCISE ${exercise}----------`);

    for(let rep=1; rep<5; rep++) {
        console.log(`lifting weight repetition ${rep}`);
    }
}

//while loop
let i = 1;
while(i <= 10) {
  //  console.log(`while loop ${i}`);
    i++;
}

let rolldice = Math.trunc(Math.random() * 6) + 1;
//console.log(rolldice);

while(rolldice != 6) {
    console.log(`You rolled a ${rolldice}`);
    rolldice = Math.trunc(Math.random() * 6) + 1;

    if(rolldice == 6) {
        console.log("Loop is about to end");
    }
}
