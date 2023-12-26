// Ques-1 Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”



function uniqString(str){
    let uniqueStr = []; 
    for(let i = 0; i < str.length; i++){
        if(uniqueStr.includes(str[i]) === false){
            uniqueStr.push(str[i]);
        }
    }
    let resString = uniqueStr.join("");
    return resString;
}

console.log(uniqString('abcdabcdefgggh'))

// Ques-2 Write a JavaScript function that accepts a list of country names as input and 
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output : 
// "United States of America"

function longestCountry(listCount){
    let longCountry = listCount[0];
    for(let i = 0; i < listCount.length; i++){
        if(listCount[i].length > longCountry.length){
            longCountry = listCount[i];
        }
    }
    return longCountry;
}

console.log(longestCountry(["India", "Russia", "China", "United States Of America"]));


// Ques-3. Write a JavaScript function to generate a random number within a range 
// (start, end)

function randomInRange(start, end){
    let num = Math.floor(Math.random() * (start - end) + end);
    return num;
}

console.log(randomInRange(2, 5));

// Ques-4 Write a JavaScript function that returns array elements larger than a number.

function largerArrayElements(arr, tarNum){
    let resArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > tarNum){
            resArr.push(arr[i]);
        }
    }
    return resArr;
}

console.log(largerArrayElements([2, 7, 9, 6, 1, 5], 5));


// Ques-5 Write a JavaScript function to count the number of vowels in a String 
// argument. There are no special characters in it.

function countVowel(str){
    let vowels = str.toLowerCase().replaceAll(/b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z| /gi, "");
    return vowels.length;
}

console.log(countVowel("Hello world How are you"));

// Ques-6 write a arrow function that returns square of a number n

let sqr = n => {
    return n * n;
};

console.log(sqr(2));

// Ques-7 Write a function that prints "Hello world" 5 time at a interval of 2s.
let id = setInterval( () => {
    console.log("Hello World");
}, 2000);

setTimeout( () => {
    clearInterval(id);
    console.log("setInterval has been stopped");
}, 10000);
 

// Ques-8 write a arrow function named arrayAvg() that accepts an array of numbers and give their avrage

let arr = [1, 2, 3, 4, 5];
let sum = 0;
let arrAvg = () => {
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}

console.log(arrAvg(arr);
