let readlineSync = require('readline-sync')
let num1 =readlineSync.questionInt("Enter the number");

let num2 =readlineSync.questionInt("Enter the number");

//switch case
//switch (key) {
  //  case value:
        
    //    break;

    //default:
      //  break;
//}

//cli menu
console.log("---------------------");
console.log("simple calculator for maths");
console.log(`\t press + for addition \n\t press - for subtraction \n\t press * for multiplycation \n\t press / for division \n\t press % for modeles`);
console.log("----------------------");

let symbol = readlineSync.question("enter what you need to perfor")
switch (symbol){
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
         break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    case "%":
        console.log(num1 % num2);
 
        break;
    default:
        console.log("invailed number");
        break;    
}


// let a = 1;

// console.log(a++);
// console.log(a++);
// console.log(a++);
// console.log(a++);
// console.log(a++);
// console.log(a++);
// console.log(a++);
// console.log(a++);
// console.log(a++);
// console.log(a++);
// console.log(a++);

//WHILE LOOP

//PRINT FIRST 100 NATURAL NUMBERS
let a = 1;
while(a <= 50){
    console.log(a);
    //a==;
    a = a + 1
}



//print 10 even numbers
let b = 2;
while (a <= 20){
    console.log(a);
    a = a + 2;
}