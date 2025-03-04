// // 'use strict';

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// // Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// // writing code on the global is not recommended
// //pass data in to function is really Good
// const displayMovements = function(movements) {
//   // inner html returns everything that is in html
//   // we are using like setter
//   containerMovements.innerHTML=''
//   movements.forEach(function(mov, i) {
//     const type = mov > 0 ? 'deposit' : 'withdrawal';
//     const html = `
//       <div class="movements__row">
//         <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
//         <div class="movements__value">${mov}</div>
//       </div>`;
//   //  afterbegin tetekimna gn [8,7,6,5,4,3,2,1] ybl which we want
//       containerMovements.insertAdjacentHTML('afterbegin', html) // Correct method name
// // befor begin tetekimna orderu 1,2,3,4,5,6,
//       // containerMovements.insertAdjacentElement('beforend',html)
//     });
   


    

// const calcoutGoingMoney=function(movements){
//   const outCome=movements.filter((mov)=>mov<0).reduce((acc,mov)=>acc+mov,0);
//   labelSumOut.textContent=`${Math.abs(outCome)} EUR`
// }


// calcoutGoingMoney(account1.movements)


// const interest=movements.
// filter((depo)=>depo>0)
// .map((deposit)=>deposit*1.2/100)
// .filter((int,i,arr)=>{
//   // console.log(arr)
//   return int>=1
// })
// .reduce((acc,inte)=>acc+inte,0)

// labelSumInterest.textContent=`${interest} EURO`

// };

// // Call the function to display account1 movements

// /////////////////////////////////////////// //////
// /////////////////////////////////////////////////
// // LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);



// /////////////////////////////////////////////////

// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// //Map :silmilar with Foreach but creates a brand new array over the original array
// //Filter: contains elements that passed test condition  condition and neturn new array
// //Reduce: Adding all elements together{like snow ball it gets larger when it rolls} no new array but it reduces it by adding




// // const eurToUsd=1.1;

// // const movementsUSD= movements.map(function(mov){
//   //   return mov*eurToUsd;
//   //   // return 23;
  
//   // })
//   // replace with arrow
//   // const movementsUSD=movements.map(mov=>  mov * eurToUsd) 
// // const movementsUSD= movements.map(mov=> mov * eurToUsd);
// // console.log(movements)
// // console.log(movementsUSD)
// // const movementUSDfor=[];
// // for(const mov of movements) movementUSDfor.push(mov*eurToUsd)
// //   console.log(movementUSDfor)

// // const movementDescription = movements.map((mov, i) => 
//   //   `Movement ${i + 1}: you ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
// // );

// // console.log(movementDescription);



// // const user='Steven Thomas Williams'//stw

// // spliting each word by blank space by blank space 
// // const username=user.
// // toLowerCase()
// // .split(' ')
// // .map(function(lett,i){
//   //   return lett[0]; 
//   // }).join('');
//   // const createUsername=function(user){
//     // const username=user.
//     // toLowerCase()
//     // .split(' ')
//     // .map (lett => lett[0]).join('');
//     // return username
//     // }
//     // console.log(createUsername('Steven Thomas Williams'))
//     const createUsername=function(accs){
//         accs.forEach(function(acc){
//             acc.username=acc.owner
//           .toLowerCase()
//           .split(' ')
//           .map (lett => lett[0]).join('');})
        
//         }
//           createUsername(accounts)
//           console.log(accounts)
        
//         // const firstLetter=username.map(function(lett,i){
//           //  return lett.slice(0, 1); 
          
//           // })
//           // console.log(firstLetter.join(''))
// //           // FILTER ARRAY
          
          
// //           // const deposit=movements.filter(function(mov){
// //             //   return  mov>0
            
// //             // })
// //             // console.log(deposit)
 const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // const deposit = movements.filter(function(mov) {
// //   return mov > 0;
// // });console.log(deposit); // [200, 450, 3000, 70, 1300]


// // //for loop has limitation of calling many methods
 
// // const depositFor=[]
// // for (mov of movements) if (mov>0)depositFor.push(mov)
// //   console.log(depositFor)

// // const withdrawal=movements.filter(mov=>mov <0 )

// // console.log(withdrawal)
// // Reduce method
// // console.log(movements)
// // reduce accepts current element and the index and also the entiare array
// // accumlator{acc} like snow ball we initalize by giving it zero  
// // const balance=movements.reduce(function(acc,cur,i,arr){
// // console.log(`iteration ${i} : ${acc}`)
// //   return acc+cur
// //  },0)

// //  console.log(balance)
// //  let balance2=0

// //  for(const mov of movements) balance2 += mov;
// //  console.log(balance2)
// // const balance=movements.reduce((acc,cur)=>acc+cur,0)
   
//   //  console.log(balance)

// // const displayMovements = function(movements) {
// //   // inner html returns everything that is in html
// //   // we are using like setter
// //   containerMovements.innerHTML=''
// //   movements.forEach(function(mov, i) {
// //     const type = mov > 0 ? 'deposit' : 'withdrawal';
// //     const html = `
// //       <div class="movements__row">
// //         <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
// //         <div class="movements__value">${mov}</div>
// //       </div>`;
// //   //  afterbegin tetekimna gn [8,7,6,5,4,3,2,1] ybl which we want
// //       containerMovements.insertAdjacentHTML('afterbegin', html) // Correct method name
// // // befor begin tetekimna orderu 1,2,3,4,5,6,
// //       // containerMovements.insertAdjacentElement('beforend',html)
// //     });
// // };
// // Maximum value using reduce method

// // const max=movements.reduce((acc,go)=>{
// // // acc in is traversing throuh the movments
// // // current 450  acc 200 now mocurr
// // if(acc>go)
// //   return acc
// // else
// // return go

// // },movements[0])
// // console.log(max)

// // const calcAverageHumanAge=function(ages){
// // humanAge=ages.map(age=> (age <= 2 ? 2*age : 16+age*4));
// //   // console.log(humanAge)

// // const adults=humanAge.filter(age=>age>=18)
// // console.log(adults)
// // console.log(humanAge)
// // const avg=adults.reduce((acc,curr)=>{
// //  return  acc+curr
// // },0)
// // console.log(avg/adults.length)
// // }
// // calcAverageHumanAge([5,2,4,1,15,8,3])


// //PIPELINE
// //  const totalDepositUSD=movements
// //  .filter(mov=>mov>0)
// //  .map(mov=>mov*eurToUsd)
// //  .reduce((acc,curr)=>acc+curr)
// //  console.log(totalDepositUSD)  




//  // we should not overuse chaning it can cause performance issue
//  // in javascript methods that affect(mutate) the original array is not recommended like splice and reverse
// // CHALLANGE NUMBER THREE
// // const calcAverageHumanAge2 = ages => 
// //   ages
// //     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
// //     .filter(age => age >= 18)
// //     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// //     const avg1=calcAverageHumanAge2([5,2,4,1,15,8,3])
// //     console.log(avg1)
// //FIND METHOD
// // return only the first element that satisfy the condition
// // filter returns all the array
// // const firstWithdrawal=movements.find(mov=>mov <0)
// // console.log(movements,firstWithdrawal)
// // const account=accounts.find(acc=>acc.owner==='Jessica Davis')
// // console.log(account)
// // for (const acc of accounts) {
// //   if (acc.owner === 'Jessica Davies') {
// //     console.log(acc); // This will display Jessica's object
// //   }
// // }
// //LOGIN FUNCTIONALITY

// //EVENT HANDLING
// // let currentAccount;

// // btnLogin.addEventListener('click', function(e) {
// //   // Prevent form from submitting  whic can cause page reload or stopping reload
// //   e.preventDefault();
// //   console.log('login');

// // currentAccount=accounts.find(acc=>acc.owner.username===inputLoginUsername.value);
// // console.log(currentAccount)
// // if (currentAccount.pin===Number(inputLoginPin.value)){
// //   console.log('new login')
// // }
// // });
// let currentAccount;

// btnLogin.addEventListener('click', function(e) {
//   // Prevent form from submitting which can cause page reload
//   e.preventDefault();
//   // console.log('login~');
// // Returns undifiend if it cant find it
//   currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
//   // console.log(currentAccount);
//   //cheaking if the crrent account exist by optional cheanig
// if(currentAccount ?.pin===Number(inputLoginPin.value)){
//   console.log('successfull login')
//   //DISPLAY UI MESSAGE
//   //we ca display things with opacity 0and 100
//   labelWelcome.textContent=
//   `welcome to our bank ${currentAccount.owner
//   .split(' ')[0]
//   }`;
//   containerApp.style.opacity=100;
//   // clearing the input filed
//   inputLoginUsername.value='';
//   inputLoginPin.value='';
//   inputLoginPin.blur();
//   //DIsplayin movments
//   displayMovements(currentAccount.movements);
//   //displaying balance
//   const calcDisplayBalance=function(movements){
//     const balance=movements.reduce((acc,curr)=> acc+curr,0);
//   labelBalance.textContent=`${balance} EUR`;
  
//   }
//   calcDisplayBalance(currentAccount.movements)
//   // displaying Summery
//   const calcDisplaySummary=function(movements){
//     const income=movements.filter(mov=>mov >0)
//     .reduce((acc,mov)=>acc +mov, 0);
//     labelSumIn.textContent=`${income} EUR`
//   }
//   calcDisplaySummary(currentAccount.movements)

// const interest=movements.
// filter((depo)=>depo>0)
// .map((deposit)=>deposit*currentAccount.interestRate/100)
// .filter((int,i,arr)=>{
//   // console.log(arr)
//   return int>=1
// })
// .reduce((acc,inte)=>acc+inte,0)

// labelSumInterest.textContent=`${interest} EURO`
// }
// });    
'use strict';

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

// Functions
const displayMovements = function(movements,sort=false) {
  containerMovements.innerHTML = '';

const movs=sort ?movements.slice().sort((a,b)=>a-b):movements

  movs.forEach(function(mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function(acc) {
  acc.balance= acc.movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = function(movements) {
  const income = movements.filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  
  labelSumIn.textContent = `${income} EUR`;

  const outCome = movements.filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outCome)} EUR`;

  const interest = movements
    .filter(depo => depo > 0)
    .map(deposit => deposit * (currentAccount.interestRate / 100))
    .filter(int => int >= 1)
    .reduce((acc, inte) => acc + inte, 0);
    
  labelSumInterest.textContent = `${interest} EUR`;
};

const createUsername = function(accs) {
  accs.forEach(function(acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(lett => lett[0])
      .join('');
  });
};

createUsername(accounts);
const updateUI=function(acc){
  displayMovements(acc.movements);
calcDisplayBalance(acc);
calcDisplaySummary(acc);
}

// Event Handling
let currentAccount;

btnLogin.addEventListener('click', function(e) {
  e.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome to our bank, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value='';
      inputLoginPin.value='';
      inputLoginPin.blur();
    // Display movements, balance, and summary
    // displayMovements(currentAccount.movements);
    // calcDisplayBalance(currentAccount);
    // calcDisplaySummary(currentAccount.movements);
 updateUI(currentAccount)
  }
});
btnTransfer.addEventListener('click',function(e){
  e.preventDefault();
  const amount=Number(inputTransferAmount.value);
  const receiverAcc=accounts.find(acc=>acc.username===inputTransferTo.value);
  console.log(amount,receiverAcc)
  inputTransferAmount.value=""
  inputTransferTo.value=""
  if(amount>0 && currentAccount.balance>=amount 
    && receiverAcc ?.username!==currentAccount.username ){
console.log('valid')
{
  currentAccount.movements.push(-amount);
  receiverAcc.movements.push(amount);
  updateUI(currentAccount)
}
  }
})
//implementing the loan
btnLoan.addEventListener('click',function(e){
  e.preventDefault();
 const amount=Number(inputLoanAmount.value);
 if(amount>0 && currentAccount.movements.some(mov=>mov>=amount/10))
{
  currentAccount.movements.push(amount)

  updateUI(currentAccount)

}
 inputLoanAmount.value=''
 
})




//find index method
//close account we use splice but we need and index of an array so we use findindex method
btnClose.addEventListener('click',function(e){
  e.preventDefault();
  // console.log('Delete');
  if(inputCloseUsername.value===currentAccount?.username && Number(inputClosePin.value)===currentAccount.pin){


    const index=accounts.findIndex(acc=>(acc.username===currentAccount.username))
accounts.splice(index,1)

// console.log(index)
containerApp.style.opacity=0;
  }
 inputCloseUsername.value=inputCloseUsername.value='';

})

//includes specify equality 

console.log(movements.includes(-130))




  //some specify condition is really cool

  console.log(movements.some(mov=>mov===-130))
  const anyDeposits=movements.some(mov=>mov>3000)
  console.log(anyDeposits)
// every method
console.log(movements.every(mov=>mov>0))
console.log(account4.movements.every(mov=>mov>0))
//separate callback
const deposit=mov=>mov>0;
console.log(movements.every(deposit))
console.log(movements.some(deposit))
console.log(movements.filter(deposit))


//flat method removing the nested array goes only one level deep
const arr=[[1,2,3,],[4,5,6],7,8]
console.log(arr.flat());

// adding the level as paramater
const arrDeep=[[[1,2],3],[4,[5,6]],7,8];
console.log(arrDeep.flat(2));



const accountMovements=accounts.map(acc=>acc.movements)
console.log(accountMovements)
const allMovement=accountMovements.flat()
console.log(allMovement)


const overalBalance=allMovement.reduce((acc,mov)=>acc+mov,0)
console.log(overalBalance)

const overalBalance2=accounts.map((acc)=>acc.movements).flat().reduce((acc,mov)=>acc+mov,0)
console.log(overalBalance2)

//flat map only goes one level so if we need more level to go deep we have to use flat
const overalBalance3=accounts.flatMap(acc=>acc.movements)
.reduce((acc,mov)=>acc + mov,0)
console.log(overalBalance3)

//SORTING Arrays

// the sort method mutate or affects the original array we have to be carefull
const owners=['eden','nardos','sossina','eduniya']
console.log(owners.sort())
console.log(owners)
// in numbers it sorts by assuming it it an like a string
console.log(movements)
// console.log(movements.sort())


// return <0 A, B (keep order)
// return > 0 B,A (switch order)
movements.sort((a,b)=>{
  if(a>b) return 1
  if(b>a) return -1
})
console.log(movements)

//decending 
movements.sort((a,b)=>{
  if(a<b) return 1
  if(b<a) return -1
})
console.log(movements)


//simple sorting method
movements.sort((a,b)=>a-b);
console.log(movements )
movements.sort((a,b)=>b-a);
console.log(movements)



let sorted = false;

btnSort.addEventListener('click', function(e) {
  // Prevent default action if necessary
  e.preventDefault();
  
  // Display movements with sorting based on the current state of 'sorted'
  displayMovements(currentAccount.movements, !sorted);
  
  // Toggle the sorted state
  sorted = !sorted;
});

//how do we write an array automatically but it affects the original array
const arr4=[1,2,3,4,5,6,7];
console.log(new Array(1,2,3,4,5,6,7))
//The fill Method
const x=new Array(7);
console.log(x)

x.fill(1,3,5);
// x.fill()
console.log(x)
//from 4 to 6 put 23
arr4.fill(23,4,6);
console.log(arr4)


// array .from function it is way nicer
const y=Array.from({length:7},()=>1)
console.log(y)

// we use _ for throw away paramater parameter that we don use it
const z= Array.from({length:7},(_,i)=>
  i+1
)
console.log(z)
// const MyRandom=Array.from({length:7},(_,i)=>Math.trunc().random(i))
// console.log(MyRandom)

// labelBalance.addEventListener('click',function(){
//   const movementUI=Array.from(
//     document.querySelectorAll('.movements_value'),el=>Number(el.textContent.replace('EURO',''))
//   )
//   console.log(movementUI.map())
// })
//another easy way
const movementsUI={...document.querySelectorAll('.movements_value')} 
console.log(movementsUI)
// what actual want from this all
// [ADD TO THE ORIGINAL ARRAY
// .Push() to the end
// .unshift() to the begnning
// array exercise 

const bankDepositSum=accounts.map((mov)=>mov.movements).flat().reduce((acc,cur)=>acc+cur)
console.log(bankDepositSum)