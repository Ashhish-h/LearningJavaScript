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

let winNum = 20;
let userInput = +prompt("Guess a Number");
if(userInput === winNum){
    console.log("You Won");
} else {
    if(userInput < winNum){
        console.log("Number is too small");
    } else {
        console.log("Number is too big");
    }
}



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
