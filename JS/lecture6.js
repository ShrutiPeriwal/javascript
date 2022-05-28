// lecture number 6
const Id = "ABC123";
var FullName = "Shruti Periwal";
var email = "Shruit@11gmail.com";
var password = "123456";
var Confirmpassword = "123456";
var state = "Bikaner";
var country = "Rajasthan";

console.log(`
    With Unique ID: ${Id}
    User is : ${FullName}
    and his email : ${email}
    and uses the password : ${password}
    confirm the password : ${Confirmpassword}
    state name : ${state}
    Country :${country}
`)

//lecture number 7
var sellingPrice = 199;
var listPrice = 799;
var Discount = ((listPrice - sellingPrice) / listPrice) *100;
console.log("Discount percentage is: " + Discount);
displayDiscountPercentage = Math.round(Discount);
console.log(displayDiscountPercentage);

//lecture number 8 
//using typeof 
var result = listPrice > sellingPrice;
console.log(typeof result);

//lecture number 9
//conditional java script
var temperature;
//TODO: Go to google and get the data

temperature = 20;
if(temperature < 20) {
    console.log("its very cold outside");
}
if(temperature < 30) {
    console.log("its moderate outside");
}  else {
    console.log("its really Hot outside");
}

//lecture number 10
var myemail =  true;
var facebook = false;
var google = false;
if(myemail || facebook || google) {
    console.log("Login Success");
} 