// ############################ Functions ###############################

// ## Functions are used to increase readability of the code and it also reduces the lenght of the code

// #######   Syntax 
function functionName (){
    //Body of the code
    console.log("Example");
}

// ## We have to call the function by its fucntion name followed by parenthesis
functionName();


// ######## Function With Arguments
// ###### Syntax
function argFunc(name, age){
    console.log(`${name} whose age is ${age}`);
}

argFunc("Ashish", 18); //the values which are passed are called parameters

//Note You can give any number of arguments, and order is important provide the value of the parameter in the same order in which you have set the arguments.
// providing first values are necessary you can leave the rest.


// ######### Functions with return statement

function retFunc(num1, num2){
    return num1 + num2; //note no statement after the return statement well be excuted the moment compiler reads return statement it will return from the function.
}

console.log(retFunc(4, 5));

// you can also store it into different variable
let sum = retFunc(4, 5);
console.log(sum);

// ######### Scopes of Variable
// Function Scope
// the variable that are declared into the function body. They cannot be accesed from outside of the scope


// Block Scope 
// The variables that are declared inside {} 
{
    let num1 = 45;
}

// console.log(num1); // it will give error that num1 is not defined


//Lexical Scope








// ########## Function Expression 

// In this we assign a nameless function to a variable
// ###### Syntax
let funcExp = function(){
    console.log("This is a name Less function");
    return true; // a return statement is req
}

console.log(funcExp());

// You can perform every operation on this variable like you do to the normal variable

// #### Higher Order Functions
// We can even return funtion from functions

let request = 'even';
function oddEvenTest(request){
    if (request == 'odd'){
        let odd = function(n){
            console.log(!(n % 2 == 0));
        }
        return odd;
    }
    if(request == 'even'){
        let even = function(n){
            console.log(n % 2 == 0);
        }
        return even;
    }
}


// ####### Methods
// Methods are nothing but functions defined into object

let calculator = {
    add: function(a, b){
        return a + b;
    },
    sub: function(a, b){
        return a - b;
    },
    multiply: function(a, b){
        return a * b;
    }
};

// Short hand method of defining functions in the objects

let calci = {
    add(a, b){  //whenever javascript compiler sees this it will automatically think of it as a function in this         you don't have to write keyword function.
        return a + b;
    },
    sub(a, b){
        return a - b;
    }
};


// ###########  THIS KEYWORD in JavaScript
// this keyword refers to the object that is currently exceuting 


// ########  Arrow Functions

// Syntax
// const func = (a, b) => {
//     // Method Defination
// };

let e = 10; 
let f = 20;
let func2 = (e, f) => {
    console.log(e + f);
};

//if you want to return a single value in arrow functions you don't even need to write the return keyword it will be implicitly added by the complier

