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
