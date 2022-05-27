/*
Mark and John are trying to compare their BMI , which is calculated using the formula BMI = mass / height ** 2
 1. Store Mark's and John's mass and height in variables.
 2. Calculate both their BMIs using the formula.
 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
 4. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's" or "John's BMI is higher than Mark's".
 
 */

 const massMark = 78;
 const heightMark = 1.69;
 const massJohn = 92;
 const heightJohn = 1.95;

 const BMIMark = massMark / heightMark ** 2;
 const BMIJohn = massJohn / heightJohn ** 2;

 console.log(BMIMark, BMIJohn);

 if (BMIMark > BMIJohn) {
     console.log("Mark's BMI is higher than John's BMI");
 } else {
     console.log("John's BMI is higher than Mark's BMI");
     
 }