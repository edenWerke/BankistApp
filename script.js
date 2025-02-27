'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// writing code on the global is not recommended
//pass data in to function is really Good
const displayMovements = function(movements) {
  // inner html returns everything that is in html
  // we are using like setter
  containerMovements.innerHTML=''
  movements.forEach(function(mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>`;
  //  afterbegin tetekimna gn [8,7,6,5,4,3,2,1] ybl which we want
      containerMovements.insertAdjacentHTML('afterbegin', html) // Correct method name
// befor begin tetekimna orderu 1,2,3,4,5,6,
      // containerMovements.insertAdjacentElement('beforend',html)
    });
};

// Call the function to display account1 movements
displayMovements(account1.movements);
/////////////////////////////////////////// //////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


//Map :silmilar with Foreach but creates a brand new array over the original array
//Filter: contains elements that passed test condition  condition and neturn new array
//Reduce: Adding all elements together{like snow ball it gets larger when it rolls} no new array but it reduces it by adding




const eurToUsd=1.1;

// const movementsUSD= movements.map(function(mov){
//   return mov*eurToUsd;
//   // return 23;

// })
// replace with arrow
// const movementsUSD=movements.map(mov=>  mov * eurToUsd) 
// const movementsUSD= movements.map(mov=> mov * eurToUsd);
// console.log(movements)
// console.log(movementsUSD)
// const movementUSDfor=[];
// for(const mov of movements) movementUSDfor.push(mov*eurToUsd)
//   console.log(movementUSDfor)

// const movementDescription = movements.map((mov, i) => 
//   `Movement ${i + 1}: you ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
// );

// console.log(movementDescription);



// const user='Steven Thomas Williams'//stw

// spliting each word by blank space by blank space 
// const username=user.
// toLowerCase()
// .split(' ')
// .map(function(lett,i){
//   return lett[0]; 
// }).join('');
// const createUsername=function(user){
// const username=user.
// toLowerCase()
// .split(' ')
// .map (lett => lett[0]).join('');
// return username
// }
// console.log(createUsername('Steven Thomas Williams'))
const createUsername=function(accs){
  accs.forEach(function(acc){
    acc.usern=acc.owner
  .toLowerCase()
  .split(' ')
  .map (lett => lett[0]).join('');})

}
  createUsername(accounts)
  console.log(accounts)

// const firstLetter=username.map(function(lett,i){
//  return lett.slice(0, 1); 

// })
// console.log(firstLetter.join(''))