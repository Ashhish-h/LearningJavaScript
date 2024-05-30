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




// ### api calls with async and await 

async function getApiRes(){
    let res = fetch(url);
    console.log(res);
}

getApiRes();
// there is a problem ther we will get undefined instead of api data due to synchronous nature of javaScript,
// it will simply call the fetch() and excute the next line it won't wait to get response from the api

// To solve this we use  await

async function apiRes(){
    let res = await fetch(url); // now util we get the response from the api exceution will be paused
    let data = await res.json();
    console.log(res);
    console.log(data.fact); // print actual data we got from the api
}

// But the problem in using await is that if one fails next lines will not excetue to counter this issue we run the code in try & catch block


apiRes();

// ##### Getting data form api using axios

// Why use Axios when we have fetch()?
// fetch does not retrun data directly it return a readableStream which we have to parse to get data
// however axios returns data directly

async function getDataUsingAxios(){
    try{
        let res = await axios.get(url); // it also returns a promise object which have the data
        // console.log(data); // it will return the data
    } catch (e){
        console.log("error occured: ", e);
    }
}

getDataUsingAxios();