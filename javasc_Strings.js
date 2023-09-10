// console.log("Hello World!!");

// ############ Strings ##############

// In JavaScript, strings are used to represent and manipulate a sequence of characters. JavaScript string can have 0 or more characters.
//Strings are rpresented by single or double quotes.
//You can use quotes inside a string, as long as they don't match the quotes surrounding the string.
// Ex -

let text = "It's alright";

// OR 

let text2 = "He is called 'Johnny' ";

//Finding length of the string

let Exp = "Hello my name is Ashish, how are you?";
console.log(Exp.length);


//If you want to use double quotes inside a string declared by double quotes you can use backlash(\).
// Ex - 

let Exp2 = "we are the so-called \"Vikings\" form the north."; 

// accessing indexes in strings

let str = "Hello";


// Now we can access index in this string like this -->

console.log(str[3]); //(Here 3 is the index which we want to access)


// ########### Some Useful String Methods ###########
// trim() -- used to remove white spaces from a string ex-

let  firstName = "     Ashish     ";
firstName.trim();
console.log(firstName); // Output -->      Ashish  

// Because firstName is a string and it is immutable so firstName.trim() method will create
// a different string object you can store it in the same Variable or create a different variable  

let trimmedName = firstName.trim();
console.log(trimmedName); // Output --> Ashish

// toUpperCase() --> Change all the character of a string into upper case

console.log(trimmedName.toUpperCase());

// toLowerCase() --> Change all the character of a string into lower case

console.log(trimmedName.toLowerCase());

// slice --> used to extract certain portion of a string by their index
// it takes two argument Start Index and End Index(end index is not included)

console.log(trimmedName.slice(0, 4));
console.log(trimmedName.slice(0)); 

// if last index is empty or is greater than the length of string itself then it willprint the compelete string.


// ################ String concatenation ##############

//Joining of two strings is known as string concatenation.

let fName = "Ashish";
let lName = "Kushwaha";

let fullName = fName + lName;
console.log(fullName); //output - AshishKushwaha
// You can add space between the name by -
fullName = fName + " " + lName;
console.log(fullName);


// ######################## Template String #####################

// Template string also known as template literals are a the features of mordern javaScript introduced in ES6.
// They are dlimited by (`) backticks characters. Which allows multi-line strings with embedded expressions
// delimited by dollar($) followed by  curly braces {} --> ${}


let s = "Hello my first name is" + " " + fName + " " + "and last name is " + " " + lName;
console.log(s); 

// We can achieve the same thing by using template string or template literals -

let tempString = `Hello my first name is ${fName} and last is ${lName}`;
console.log(tempString);

