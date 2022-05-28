/* 
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a ne gymnastics discipline,
which works differently.
Each team complete 3 times , and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise , no team wins!!
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores.
2. Use the function to calculate the average for both teams.
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'),
and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4.  Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
*/

const calcAverage =  (a, b, c) => (a+b+c) / 3;
console.log(calcAverage(3, 4, 5));

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
 
const checkWinner = function(avgDolhins , avgKoalas) {
    if(avgDolhins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolhins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolhins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolhins})`);
    } else {
        console.log("No team wins");
    }
}   
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);