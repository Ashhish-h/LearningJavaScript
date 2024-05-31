// ########################## ERROR HANDLING ################################ 
// Error handling refers to the methods and strategies used to detect, handle, and recover from errors that occur during the execution of a program or application. In JavaScript, error handling can be done using try-catch blocks, error objects, and the throw statement. By using these mechanisms, developers can gracefully handle errors and provide meaningful messages to users, rather than simply displaying a generic "Error" message.

// try catch 

// try - Defines a block of code to tested for error while it is being exceuted
// catch - Allows you to define a block of code to be exceuted if an error occurs in try block

// syntax
try {

} catch(e) {  //e is the type of error that has happend 

}

// or

try {

} catch {

}

// both syntax is correct


try {
    console.log(a);
} catch {
    console.log("a is not defined");
}
// Without try catch it would give error


try {
    console.log(b);
} catch(e){ // e is a variable name 
    console.log(e);  //It will print the error type
}

// ############ throw 

// throw - throw statement allows users to create custum errors

// throw " This is the example of custom error";

// ####### finally 

// finally - The finally statement lets you execute code, after try and catch, regardless of the result:

try {
    console.log(c);
} catch(e){
    console.log(e);
} finally {
    console.log("Finally will always exceute regardless of the result of try and catch");
}





// The Error Object
// JavaScript has a built in error object that provides error information when an error occurs.

// The error object provides two useful properties: name and message.

// Error Object Properties
// Property	Description
// name	Sets or returns an error name
// message	Sets or returns an error message (a string)
// Error Name Values
// Six different values can be returned by the error name property:

// Error Name	Description
// EvalError	An error has occurred in the eval() function
// RangeError	A number "out of range" has occurred
// ReferenceError	An illegal reference has occurred
// SyntaxError	A syntax error has occurred
// TypeError	A type error has occurred
// URIError	An error in encodeURI() has occurred
// The six different values are described below.

// Eval Error
// An EvalError indicates an error in the eval() function.

// Newer versions of JavaScript do not throw EvalError. Use SyntaxError instead.

// Range Error
// A RangeError is thrown if you use a number that is outside the range of legal values.

// For example: You cannot set the number of significant digits of a number to 500.

// Example
let num = 1;
try {
  num.toPrecision(500);   // A number cannot have 500 significant digits
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}


// #########
// Reference Error
// A ReferenceError is thrown if you use (reference) a variable that has not been declared:

// Example
let x = 5;
try {
  x = y + 1;   // y cannot be used (referenced)
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}


// #########
// Syntax Error
// A SyntaxError is thrown if you try to evaluate code with a syntax error.

// Example
try {
  eval("alert('Hello)");   // Missing ' will produce an error
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}


// #########
// Type Error
// A TypeError is thrown if an operand or argument is incompatible with the type expected by an operator or function.

// Example
let num1 = 1;
try {
  num1.toUpperCase();   // You cannot convert a number to upper case
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}


// ##########
// URI (Uniform Resource Identifier) Error
// A URIError is thrown if you use illegal characters in a URI function:

// Example
try {
  decodeURI("%%%");   // You cannot URI decode percent signs
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}


// Non-Standard Error Object Properties
// Mozilla and Microsoft define some non-standard error object properties:

// fileName (Mozilla)
// lineNumber (Mozilla)
// columnNumber (Mozilla)
// stack (Mozilla)
// description (Microsoft)
// number (Microsoft)

// Do not use these properties in public web sites. They will not work in all browsers.

// Complete Error Reference
// For a complete reference of the Error object, go to our Complete JavaScript Error Reference.


