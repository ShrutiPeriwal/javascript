'use strict';

//DATA 
const account1 = {
    owner: 'Shruti Periwal', 
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 0707,
};

const account2 = {
    owner: 'Ankita Sharma', 
    movements: [5000, 3400, -150, -790, 3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 0808,
};

const account3 = {
    owner: 'Abhimanyu Maheshwari',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 0909,
};

const account4 = {
    owner: 'Aarav Agarval',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 1010,
};

const accounts = [account1, account2, account3, account4];

//Elements 
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance_value');
const labelSumIn = document.querySelector('.summary_value--in');
const labelSumOut = document.querySelector('.summary_value--out');
const labelSumInterest = document.querySelector('.summary_value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login_btn');
const btnTransfer = document.querySelector('.form_btn--transfer');
const btnLoan = document.querySelector('.form_btn--loan');
const btnClose = document.querySelector('.form_btn--close');
const  btnSort = document.querySelector('.form--sort');

const inputLoginUsername = document.querySelector('.login_input--user');
const inputLoginPin = document.querySelector('.login_input--pin');
const inputTransferTo = document.querySelector('.login_input--to');
const inputTransferAmount = document.querySelector('.login_input--amount');
const inputLoanAmount = document.querySelector('.login_input--loan-amount');
const inputCloseUsername = document.querySelector('.login_input--user');
const inputClosePin = document.querySelector('.login_input--pin');