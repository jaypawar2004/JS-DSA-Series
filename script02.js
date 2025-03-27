// Write a program that calculates the electricity bill. 
// The program should take the number of units as input and calculate the bill according to the following criteria:


let unit = Number(prompt("Enter a Your Unit"));
let amount = 0;

if (unit > 0 && unit <= 100) {
  amount = unit * 4.2;
} else if (unit > 100 && unit <= 200) {
  //120
  amount = 100 * 4.2 + (unit - 100) * 6;
} else if (unit > 200 && unit <= 400) {
  //250
  amount = 100 * 4.2 + 100 * 6 + (unit - 200) * 8;
} else if (unit > 400) { //500
  amount = 100 * 4.2 + (100*6) + (200)*8 +  (unit - 400) * 13;
}

console.log(amount)



//Bottum to Top


//optimized code

let unit2 = Number(prompt("Enter a your Unit"));

let amount2 = 0;
if(unit2>400){
    amount2 = (unit2-400)*13
    unit2= 400
}
if(unit2> 200 && unit2 <=400){
    amount2 = amount2 + (unit2-200)*8;
    unit2 = 200;
}
if(unit2> 100 && unit2 <=200){
    amount2 = amount2 + (unit2-100)*6;
    unit2 = 100;
}

amount2= amount2 + unit2*4.2;

console.log(amount2)
