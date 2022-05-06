/* 1. Access Multi-Dimensional Arrays With Indexes - */
var myArray = [
    [10,11,12],
    [44,83,19],
    [[19,56,87], 13, 14],
];
const myData = myArray[2][1];
console.log(myArray);

/* 2. Manipulate Arrays With push() - */
myArray.push(["Dog",3]);
console.log(myArray);

/* 3. Manipulate Arrays With pop() - */
const removedFromMyArray = myArray.pop();
console.log(removedFromMyArray);

/* 4. Manipulate Arrays With shift() - */
var removedFromOurArray = myArray.shift();
console.log(removedFromOurArray);

/* 5. Manipulate Arrays With unshift() - */
myArray.unshift("Paul",35);
console.log(myArray);

/* 6. Shopping List - */
var myList =[
    ["Chocolate",1] ,
    ["IceCream",3] , 
    ["ColdDrink",5] ,
    ["DairyMilk",7] ,
    ["Fanta",9] , 
];
console.log(myList);

/* 7. Write Reusable JavaScript with Functions - */
const reusableFunction = function() {
    console.log("Hi World");
};
reusableFunction();

/* 8. Passing Values to functions with arguments - */
const testFun = function (param1 , param2) {
    console.log(param1, param2);
};
testFun("Hello", "World");
testFun("Hi", "Shruti");

/* 9. Global scope and Functions - */
var myGlobal= 10;
const fun1 = function() {
    myGlobal = 5;
    oopsGlobal= 5;
    console.log(myGlobal, oopsGlobal);
};
//fun1();

/* 10. Local Scope and functions - */
const myLocalScope= function() {
    var myVar;
    console.log("Hi");
};
myLocalScope();

/* 11. Global vs. Local scope in functions - */
var outerWear="jacket";
console.log(outerWear);
const myOutfit = function() {
    var outerWear ="sweater";
console.log(outerWear);
};
myOutfit();

/* 12.  Return a value from a function with return - */
const timesFive= function (num) {
    return num*5;
};
console.log(timesFive(5));

/* 13. Understanding Undefined value returned from a function -*/
var sum=0;
const addFive= function() {
    sum+=5;
    console.log(sum);
};
console.log(addFive());

/* 14. Assignment with a returned value - */
const processArg= function(a) {
    return a;
};
const processed= processArg(7);
console.log(processed);

/* 15. Stand in line - */
const nextInLine= function(arr,item) {
    arr.push(item);
    return arr.shift();
};
console.log(nextInLine([1,2,3], 10));

/* 16. Understanding Boolean Values - */
var run=false;
const welcomeToBooleans =function() {
    if(!run) return (run=true);
};
console.log(welcomeToBooleans());

/* 17.  Use conditional logic with if statements -*/
const wasThatTrue=function(param) {
    if(param) {
        return "Yes, That was true";
    }
    return "No, That was false";
};
console.log(wasThatTrue(true));
console.log(wasThatTrue(false));

/* 18. Comparison with the equality operator -*/
function equlityTest(val) {
    if(val==12) {
        return "The string Equal";
    }
}
console.log(equlityTest("12"));

/* 19. Comparison with the Equality Operator - */
function equlityTest(val) {
    if(val==12) {
        return "The string Equal";
    }
}
console.log(equlityTest("12"));

/* 20. Comparison with the strict Equality Operator - */
function strictEqualityTest(val) {
    if(val===7) {
        return "String Equal";
    }
}
console.log(strictEqualityTest(7));

