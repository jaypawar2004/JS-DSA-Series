// Making a Bill Diacount Calculator
// 0-5000 - 0 %
// 5001-7000 - 5%
// 7001-9000 - 10%
// 9001 - above - 20%

let amount = prompt("Enter a your Bill Amount");
let dis = 0;

if (amount >= 0 && amount <= 5000) dis = 0;
else if (amount > 5000 && amount <= 7000) dis = 5;
else if (amount > 7000 && amount <= 9000) dis = 10;
else if (amount > 9000) dis = 20;

console.log(amount - (dis * amount) /100);
