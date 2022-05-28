//lecture number 14 
//functions- A function is a piece of code that we can re use over and over in our code.


//function sayHello() {
  //  console.log("Hello there, Shruti");
//}
//sayHello(); //calling function , invoking the function .

//function sayHii(name) {
  //  console.log("Hello there, Shruti");
    //console.log("Hello there,", name);
//}
//sayHii("shruti");
//sayHii("sammy");
    
//function sayHii(name) {
   // console.log("Hello there , Shruti");
    //console.log(`Hello there, ${name}. How are you?`);
//}
//sayHii("shruti periwal");
//sayHii("shrutiiii");

//function namstey() {
  //  return "Hello in India";
//}
//var greetings = namstey();
//console.log(greetings);
//console.log(namstey()); //we can also print the function under console

function fruitProcessor(apples, oranges) {
    //console.log(apples,oranges);
    const juice = `Juice with ,${apples} apples and ${oranges} oranges.`;
    return juice;
  }
  const appleJuice = fruitProcessor(2,4);
  console.log(appleJuice);
  //console.log(fruitProcessor(0,4)); // we can also do this
  //lecture number 15
  
  /* Define a function that can answer the role of a user
  A user can be on following roles
  admin - with all access
  subadmin - with access a crete / delete courses
  testprep -  with access to crete / delete tests
  user - consume all content
  other - trial user
  INPUT : getUserRole(name, role) */
  
  //var getUserRole = function (name, role) {
    //switch(role) {
      //case "admin":
        //return `${name} is admin with all access`
        //break;  //this is not necessary
  
      //case "subadmin":
        //return `${name} is sub-admin with all access to create and delete course`
        //break;
      
     //case "testprep":
       //return `${name} is testprep with all access to create and delete tests`
       //break;
  
     //case "user":
       //return `${name} is a user to consume content`
       //break;
  
     //default:
       //return `${name} is a trial user`
       //break;
    //}
  //}
  //console.log(getUserRole("Shruti","testprep"));
  
  //var getRole = getUserRole("sammy", "user");
  //console.log(getRole);
  
  //function Expressions 
  const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
  }
  
  //Arrow functions in javascript
  //const calcAge3 = birthYear => 2037 - birthYear;
  //const age3 = calcAge3(1991);
  //console.log(age3);
  
  //const yearsUntilRetirement =  birthYear  => {
    //    const age = 2037 -birthYear;
      //  const retirement = 65 - age;
       // return retirement;
  //}
  //console.log(yearsUntilRetirement(1991));
  
  // if we wan tot pass more than one parameter
  const yearsUntilRetirement = (birthYear , FirstName) => {
    const age = 2037 - birthYear;
    const retirement =  65 - age;
    return `${FirstName} retires in ${retirement} years`;
  }
  console.log(yearsUntilRetirement(1991 , "Shruti"));