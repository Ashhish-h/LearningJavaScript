// In JavaScript, an operator is a special symbol used to perform operations on operands (values and variables)1. There are different types of JavaScript operators, including Arithmetic Operators, Assignment Operators, Comparison Operators, String Operators, Logical Operators, Bitwise Operators, Ternary Operators, and Type Operators.

// Arithmetic Operators are used to perform arithmetic on numbers. Some examples include + for addition, - for subtraction, * for multiplication, / for division, and % for modulus (division remainder).

// Assignment Operators assign values to JavaScript variables. The basic assignment operator is =, which assigns the value of its right operand to its left operand. Other assignment operators include +=, -= and *=2.

// Comparison Operators compare two values and return a boolean value indicating whether the comparison is true or false. Some examples include == for equal to, != for not equal to, < for less than, and > for greater than.

{/* String Operators are used to manipulate strings. The + operator can be used to concatenate (join) two strings together. */}

{/* Logical Operators are used to determine the logic between variables or values. Some examples include && for logical AND, || for logical OR, and ! for logical NOT. */}

{/* Bitwise Operators treat their operands as a sequence of 32 bits (zeros and ones) and perform bit-by-bit operations on them. */}

{/*  The Ternary Operator is the only JavaScript operator that takes three operands. It is a shorthand for an if-else statement. */} 

{/* Type Operators are used to return a string indicating the type of the unevaluated operand. */}


//Arithmetic Operator 
let a = 4; //(=) is assignment operator
let b = 5;
console.log(a + b); //addition

console.log(b - 4); //subtraction

console.log(b / a); //Division

console.log(b % a); //Modulus (it gives us remainder)

//Comparison Operators
// < less than operator
console.log(a < b); //output is true, since 4 is less than 5

// > greater than
console.log(b > a); //output is ture, since 5 is greater than 4

// != not equal to
console.log(a != 5); //output is true, since 4 is not equal to 5

// == equal to operator
console.log(a == b); // false, since 5 is not equal to 5

// == VS ===

// == compares only the values, so it will give true as long as the value is same irrespective of their data type.

console.log(7 == "7"); // It will give us true, even if the data type is different.

//NOTE: it only works like this in javaScript

console.log(7 === "7"); // to check the data type too we use '===' in javascript it compares the value and its data type.

// != VS !==
// != it compares values not the data type just like ==
// !== it comapres values and data type too just like ===



// " + " 
// It's a string operator used to concatenate two strings.


//ternary operator
//Ternary Operator
// It's a shorthand for If-else
//Syntax
// condition ? exprIfTrue : exprIfFalse

let year = 20;
let beverage = (year >= 21) ? "Beer" : "Juice";
console.log(beverage); // Output: Juice