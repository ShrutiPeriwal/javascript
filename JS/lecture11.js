//lecture number 11
//show user a signout button if he is authenticated
//other wise show him option to login/singup

var authenticated = true;
//if(authenticated) {
//  console.log("Show signout button");
//} else {
  //  console.log("Show login option");
//}
//ternary
authenticated ? console.log("Signout Button") : console.login("Login");


//lecture number 12
//Create an application with following roles :
//admin -  gets full access
//subadmin -  gets access to create/delete courses
//testprep - gets access to create/delete tests
//user - gets access to consume content

//using switch case
var user ="testprep" ;
switch (user) {
    case "admin":
        console.log("you get full access");
        break;

    case "subadmin":
        console.log("gets access to create/delete courses");
        break;

    case "testprep":
        console.log("gets access to create/delete tests");
        break;

    case "user":
        console.log("gets access to consume content");
        break;

    default:
        console.log("Trial user");
        break;
}

//lecture number 13
//truely value and falsy value
var user = "value"; //true value
if(user) {
    console.log("condition is true");
}
console.log("2"+2);
var value = "2";
if(2 == value) {
    console.log("condition is true");
}
var item = "";
if(item) {
    console.log(" my condition is true");
}
var myvalue = null;
if(myvalue) {
    console.log(" the condition is true");
}