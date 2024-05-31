// What are Arrays?

// Arrays Are Linear Data Structure That Are Used To Store data, They Are Mutable In Nature Means Insertion And Deletion Operation Can Be Performed On Arrays

// Ex -> 
let studentsName = ["Ashish", "Harsh", "Aayush"];

// Creating Arrays

// Arrays can be created for specific data types like for String(Array will contain only string values) Ex->
let stringArr = ["Ashish", "Rohan"];  //Or
// Integer(Array will only contain Integer type data) Ex-> 
let intArr = [1, 2, 3]; //Or
// But we can also create Array of mixed data type (Array containg multiple data type) Ex-> 
let mixArr = ["Ashish", 175, 2];

//You can also create empty array by 
let empArr = [];

// or simply by typing  []

//Finding length of an array

console.log(stringArr.length) // It will give the length of the array.

//Accessing Elements of the array
// We can access individual elements of the array by using [] brackets like we do in strings 
// Ex->
console.log(stringArr[0]);  // Ashish

// We can also access characters of the elements of string array by 

console.log(stringArr[0][0]) // 'A' it simply means zeroth character of the zeroth element of the array stringArr

//We can also find the length of the string elements of array
console.log(stringArr[0].length); // 6

// Accessing Arrays using loops

// You can access each elements of array simply by looping over it 
for(let i = 0; i < stringArr.length; i++){
    console.log(stringArr[i]);
}  // Ashish
  //  Rohan 
 

//Modifing Values in Arrays
//So

let modArr = ["Hey!", "Hello", "Are", "You"];
console.log("Unmodified Array:")
console.log(modArr);
//To modify this array we can use its indexing (indexing of array starts with 0 to n-1)
console.log("Modified Array");
modArr[1] = "How";
console.log(modArr);
//["Hey!", "How", "Are", "You"];

// If we do like modArr[11] So since 11 index is not present in the array JavaScript will add this index and the value to that Index and the length will increase of the array to n + 1(n = 11) so length will 12

// ###################################Useful Methods of Array####################################

// ###########################.shift() methods#####################
//it is used to delete first element of the array Ex--.
modArr.shift();
console.log(modArr); // ["How", "Are", "You"];

// /##########################.unshift() ######################## 
//It is used to add element in array, element will be added at the ZEROTH Index Ex-->
modArr.unshift("Hello!");
console.log(modArr); // ["Hello!", "How", "Are", "You"];

// ##############################CONCAT############################ 
//method it is used to join two arrays
// New array is formed this method doesn't make any changes to original array
let arr1 = ["hello", "how", "Are"];
let arr2 = ["I", "Am", "doing", "fine"];
console.log(arr1.concat(arr2));
let arr3 = arr1.concat(arr2); //['hello', 'how', 'Are', 'I', 'Am', 'doing', 'fine']
//You can store the concated array into different array.

// Whose elements will be at starting? --> the array which is written inside the concat method, elements of this array will be joined after the elements of first array.


// REVERSE METHOD

// it is used to reverse a array
// No new array is formed original array is modified

console.log(arr3.reverse()); //['fine', 'doing', 'Am', 'I', 'Are', 'how', 'hello']
//you can store this in different array



// ######################################SLICE METHOD###############################

// slice method is used to get a copy of certain parts of array like string
// ex-->
// arr3.slice(); 
//slice method takes argument its optional but we can give a start and end index end index is exclusive it will no be printed

// slice(start, end); // for end element you will get (end - 1)th element

console.log(arr3.slice()); //It will print the entire array since no start point is mentioned
// ['fine', 'doing', 'Am', 'I', 'Are', 'how', 'hello']

console.log(arr3.slice(2)); //it will take 2 as a start index and it will print till end
// ['Are', 'I', 'Am', 'doing', 'fine']

console.log(arr3.slice(2,5));   //it will print from 2 to 4 since end is exclusive
//  ['Are', 'I', 'Am']

console.log(arr3.slice(-2)); // it will return last two elements form the array whenever - is used it will give elements from last 


// ##########################################SPLICE METHOD############################################

// its a all rounder method we perform deletion and addition and even slice functions with only using this
// Unlike slice it modifies the original array 
// it returns delted elements

// ###############
// It also takes arguments splice(start, deleteCount, item0.........itemN)   
// start - starting index
// deleteCount - how many elements you want to delete
// item0......itemN - elements you want to add, you can add N number of elements

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr4.splice(6));  // it will work like  slice and give elements form 6 index to last
// [7, 8, 9]
// But it will also modify the arr and remove elements from the array
// array after performing the first splice operation
// [1, 2, 3, 4, 5, 6]

console.log(arr4.splice(0, 1)); // start index is zero to last index of array, 1 is the number of elements we want to delete from the array.
//[1] --output
// array after performing the first splice operation
// [2, 3, 4, 5, 6]

console.log(arr4.splice(1, 1, 9, 7, 8, 5));  
// start index is 1 and elements to be deleted is 1 but elemets to be added after start index is 3
// output will be 4
console.log(arr4);
// and final array will be [2, 9, 7, 8, 5, 4, 5, 6]


// to add element in an array without deleting any element 
console.log(arr4.splice(3, 0, 3)); // start index is 3, no of elements to be deleted is 0 so no elements will be deleted and 3  is to be added at index 3 and the original element will  be  shifted to next index.

// it will return empty array    []

// original arr  after modification
console.log(arr4);
// [2, 9, 7, 3, 8, 5, 4, 5, 6]






// ########################## PUSH AND POP METHOD ##############################

console.log(arr4.push(4)) // used to add values in array , at the end of the array
//.push() method returns the value it has added to the array

console.log(arr4.pop()) // used to delete last element of the array.
//.pop method returns the deleted element 


// ############## forEach() method
// It takes a callback as parameter (callback :- A function passed as argument into another function)

let marks = [20, 40, 60, 80];
marks.forEach((el) => {
  console.log(el);
})

// ########## Map() Function
// It is similar to forEaach() method it also perform operation of each element and it return a new array.

let students = [{
  name: "Ashish",
  marks: 80
}, 
{
  name: "Deepak",
  marks: 85
},
{
  name: "Aayush",
  marks: 90
}];

let cpi = students.map((res) => {
  return res.marks / 10;
});
console.log(cpi);

// ######## Filter()  

//it also returns new array by filtering elements of the array based on the argument

let numbers = [2, 3, 4, 5, 6, 7, 8];
let evenNum = numbers.filter( (ele) =>{
  return ele % 2 == 0;
});

console.log(evenNum);

// ######### every() method 

//this method returns true or false if every condition return true on every element else return false

let isEvery = [2, 4, 6, 8];
let bool = isEvery.every((ele) => (ele % 2 == 0) );
console.log(bool);

// ########## some 
//this method is also like the every method it gives boolean value it checks the condition for every element and if conditionis applied on some elements it will return true else it will return false

let some = [1, 3, 5, 9];
let someBool = some.some((ele) => (ele % 2 == 0) );
console.log(someBool);

// ############ reduce method 
//it reducees the array to a single value
//it takes a reducer function with two variable  (accumulator, element)
//operation done on element will be stored in accumulator
//final value of the accumulator is returned

let reduceArr = [2, 4, 6, 8, 10];
let reducedArr = reduceArr.reduce((acc, ele) => (acc * ele));
console.log(reducedArr);



// ########### default parameters 
// default parameters are the default values given to the parameters in the function decleration 
// ex - 
// function val(value, sum = 0) // sum = - means if no value of sum is provided at function call it will by dafault be 0;


// ####### Spread 
// it is used on iterables like array and string to unpack them
let spreadArr = [2, 4, 5, 9];
console.log(...spreadArr);  // 2 4 5 9
//We can use this to copy array literals object literals strings to another variable


// ######## Rest 
// It is exact opposite of spread it allows a function to take indefinite arguments and bundle up them in an array 
function sum(...args){
  return args.reduce( (sum, ele) => (sum + ele));
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ))
