// Data Types in JavaScript
// Primitive data type

// 1) String  ex = "Ashish"
// 2) Number  ex = 2, 4, 9
// 3) booleans  ex = true or false
// 4) undefined
// 5) null
// 6) BigInt
// 7) Symbol

//typeof  Operator 
// It tells us the type of operator .

let num = 139;
let firstName = "Ashish";

console.log(typeof num);  //number
console.log(typeof firstName); //string

// we can directly type the value or string after typeof.


//Converting number to string data type

let int = 45;
console.log(num);
console.log(typeof int); //number

let stint = String(int);

//    OR

let int2 = 45 + "";  //it will convert number data type to string data type.
console.log(typeof (int + "")); //string


//Converting string to integer

let st = "90";
let int3 = Number(st);

console.log(typeof int3);

// OR

console.log(typeof(+st));//adding + before a string converts a string into number type


// ######################## undefined ########################

//If we don't initilize a value after declaring a variable then its type will be UNDIFINED. EX-
let UNDIFINED;
console.log(typeof UNDIFINED); //Now since we haven't initilize any value to this variable its type will be undifined.


// ############################## NULL #########################

let myVariable = null;
console.log(myVariable, typeof myVariable);
// Type of null will show object instead of 'null' its because of JavaScript BUG or error.

// you can assign any value to this variable later;

// ##################  BigInt ######################


//Introduced in ES6

// Need?
// We can store a limited size of integer value in JavaScript variable to check the maximum size a variable can hold use--

console.log(Number.MAX_SAFE_INTEGER); // it will give us the size of a number data type
// 9007199254740991 its the size of the Number data type, so to to avoid error when storing bigger number BigInt is introduced.

// WE CAN CONVERT INT TO BIGINT
let n =  BigInt(1243253464457);
console.log(n);

//  OR

let n2 = 145356476886978967n;
// these are the two methods to convert int to BigInt;

//U cannot perform any operation between int and big without explicitly converting one fo the two data types to make them same data types.




