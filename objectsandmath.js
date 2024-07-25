/*Task 1: Create a constructor function for the Account object with properties for accountNumber, balance, and owner.

Task 2: Implement methods within the Account object to deposit and withdraw funds.

Task 3: Create a method to calculate compound interest based on the balance and specified interest rate. Allow users to pass a year parameter to your method that represents the # of years the money has been invested and an interest rate. The output should be rounded up to the nearest whole number (perhaps using the Math.ceil()). The formula for compound interest is...

A=P(1+nr​)^nt

Where:

𝐴
 is the amount of money accumulated after n years, including interest.
𝑃
 is the principal amount (the initial sum of money).
𝑟
 is the annual interest rate (in decimal form).
𝑛
 is the number of times interest is compounded per year (you can use 1 for this example).
𝑡
 is the number of years the money is invested or borrowed for (this will be your parameter passed into the method).*/

function Account(accountNumber,balance,owner){
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}

Account.prototype.deposit_funds= function(deposit_amt){
    console.log("Depositing money to your account");
    this.balance += deposit_amt;
    console.log("Balance in your account after deposit:",this.balance);
}

Account.prototype.withdraw_funds = function(withdraw_amt){
    if(this.balance - withdraw_amt < 0)
    {
        console.log("Sorry balance is insufficient");
        return;
    }
    this.balance -= withdraw_amt;
    console.log("Balance in your account after withdrawal:",this.balance);
}

// Method to calculate compound interest 

function compoundCalculate(principal,n,r,t){
    let amt = principal * Math.pow((1 + n * r),(n * t));
    return amt;
}

//let amt = principal * Math.pow((1 + n * r),(n * t))
let obj = new Account("232424214",3456,"Steward");
let obj_one = new Account("324354645",10000,"Mulberry");

obj.deposit_funds(3333);
obj.withdraw_funds(30000);

obj_one.deposit_funds(5678);
obj_one.withdraw_funds(10000);

const result = compoundCalculate(2000,1,3.2,1);
console.log("Compound Interest earned :", result);

const result_1 = compoundCalculate(6000,1,2.5,1);
console.log("Compound Interest earned :", Math.ceil(result_1));