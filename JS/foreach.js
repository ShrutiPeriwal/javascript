// Lecture number 29
//For each loop
const myState = [
    "Rajasthan" ,
    "Delhi" ,
    "Assam" ,
    1947,
    "Tamil Nadu" ,
    "Maharastra" ,
];

//myState.forEach( (s) => (console.log(s) ) );

// Lecture number 30
//For of loop and for in loop
const names = [
    "youtube" ,
    "facebook" ,
    "Instagram" ,
    "netflix" , 
    "amazon" 
]
//for(const n of names) {
//    console.log(n);
//}

const symbols = {
    yt : "youtube",
    ig : "instagram",
    fb : "facebook",
    lcp : "learncodeonline"
};
for(const n in symbols) {
   // console.log(n); // yt,ig,fb,lcp
    //console.log(symbols[n]); //accessing value from an object  - youtube, instagram, facebook, learncodeonline
    console.log(`Key is ${n} and the value is ${symbols[n]}`);
}