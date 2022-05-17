const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithDrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithDrawal);

const account1 = {
    owner: "Shruti Periwal",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 7070,
  };
  
  const account2 = {
    owner: "Ankita Sharma",
    movements: [5000, 3400, -150, -790, 3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 8080,
  };
  
  const account3 = {
    owner: "Abhimanyu Maheshwari",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 9090,
  };
  
  const account4 = {
    owner: "Aarav Agarval",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 1010,
  };
  
  const accounts = [account1, account2, account3, account4];

  console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Abhimanyu Maheshwari');
console.log(account);

console.log(movements);

//its check only equality
console.log(movements.includes(-130));

//its check the condition
const anyDeposits = movements.some(mov => mov > 5000);
console.log(anyDeposits);