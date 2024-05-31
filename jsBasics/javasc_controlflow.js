// Control flow statements

// 1) IF-Else

// syntax

// if(condition) {
//     set of code too be excuted
// } else {
//     excute this part
// }

let age = 19;
if(age >= 18)//it take boolean value so write expression that gives boolean value
{
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

// If-Else-If-Else

if(age > 18){
    console.log("You are eligible");
} else if(age == 18){
    console.log("You are eligible");
} else {
    console.log("You are not");
}

// Else if is used to specify a new condition if the first condition is false.


// Falsy Values
// 1) false
// 2) ""
// 3) 0
// 4) undifined
// 5) null 
//These are the falsy values that hold false as a value

if(false){
    console.log("It won't be printed");
} else {
    console.log("It will be printed")
}

if(""){
    console.log("It won't be printed");
} else {
    console.log("It will be printed");
}

if(0){
    console.log("It won't be printed");
} else {
    console.log("It will be printed");
}

let hello;  //undifined
if(hello){
    console.log("It won't be printed");
} else {
    console.log("It will be printed");
}

let hello1 = null;
if(hello1){
    console.log("It won't be printed");
} else {
    console.log("It will be printed");
}


// Every other value other than falsy value is truthy value
// for example
// Every non empty string  -- "ksfhak", "ihgks"
// Any integer value including negative ones too other than 0


//  Ternary operator
//  Ternary Operator
//  It's a shorthand for If-else
//  Syntax
//  condition ? exprIfTrue : exprIfFalse

let year = 20;
let beverage = (year >= 21) ? "Beer" : "Juice";
console.log(beverage); // Output: Juice


// Nested IF ELSE

// let winNum = 20;
// let userInput = +prompt("Guess a Number");
// if(userInput === winNum){
//     console.log("You Won");
// } else {
//     if(userInput < winNum){
//         console.log("Number is too small");
//     } else {
//         console.log("Number is too big");
//     }
// }



// If - Else-If - ELSE
//In JavaScript, the else if statement is used to introduce a new condition to test if the previous if condition is false.

//You can add multiple else if condition. 
let tempInDegree = 50;

if (tempInDegree < 0){
    console. log("extremely cold outside");
}else if(tempInDegree < 16){
    console. log("It is cold outside");
}else if(tempInDegree < 25){
    console. log("wheather is okay ");
}else if(tempInDegree < 35){
    console. log("lets go for swim");
}
else if(tempInDegree < 45) {
    console. log("turn on AC");
}else{
    console. log("too hot!!");
}

// Switch Statement

let day = 5;
// switch checks the equality that means any number provided to switch it will check it equality with the provided cases if it matches it will run that code or if it doesn't match it will run the default case

// Each case is terminated by break statement, if it is not provided control will flow to the next case and that will also be excuted.

switch (day){
    
case 0:
   console.log("Sunday");
   break;
case 1:
  console.log("Monday");
   break;
case 2:
  console.log("Tuesday");
   break;
case 3:
  console.log("Wednesday");
   break;
case 4:
  console.log("Thrusday");
   break;
case 5:
  console.log("Friday");
   break;
case 6:
  console.log("Saturday");
   break;
default:
     console.log("Invalid Day");
}


// While Loops 

let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}


//In this example, the loop will continue to run as long as the variable i is less than 5. The console.log(i) line will output the value of i to the console, and then i is incremented by 1 with i++. When i is no longer less than 5, the loop will stop running. This will result in the numbers 0 through 4 being printed to the console.

//While loop is entry control loop that means first condition will be checked and then loop will run.


// do-while loop

let k = 0;

do {
  console.log(k);
  i++;
} while (k < 5);

//do while loop is called exit control loop because it will excute the code at least once even if the condition doesn't match.

//In this example, the loop will first execute the code block, and then it will check the condition. If the condition is true, the loop will start over again, if it is false, the loop will end.

//so, the do-while loop will execute the block of code at least once, it then will continue to run as long as i is less than 5. The console.log(i) line will output the value of i to the console, and then i is incremented by 1 with i++. When i is no longer less than 5, the loop will stop running. This will result in the numbers 0 through 4 being printed to the console.


//For Loop

// Syntax

// for(initilization; condition; increment or decrement operator){ 
    // code to beexcuted
// }

for (let i = 0; i < 5; i++) {
    console.log(i);
  }


//for loop is also known as entry control loop because it checks the condition first after the initilization.
//  In this example, the loop will start when i equals 0, will continue as long as i is less than 5, and i will increment by 1 after each loop iteration. The console.log(i) line will output the value of i to the console. This will result in the numbers 0 through 4 being printed to the console.