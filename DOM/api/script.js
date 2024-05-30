// we use fetch() to get data from an api

let url = "https://catfact.ninja/fact";

fetch(url) // it return a promise object so we can use then() and catch() with fetch
.then((res) =>{
    console.log(res); // To print the response object but to access  datawe use -
    // console.log(res.json()); // json promise object  
    res.json().then((data) => {   //json method also returns a promise object
        console.log(data);
    })
})
.catch((err) => {
    console.log(err);
})