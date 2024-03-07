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