let url = "http://universities.hipolabs.com/search?name=";
const btn = document.querySelector('button');

btn.addEventListener("click", async () => { 
    let country = document.querySelector("input").value;
    let collList = await getCollegeDetails(country);
    showCollege(collList);
});

function showCollege(collList){
    let list = document.querySelector("#list");
    for(college of collList){
        let li = document.createElement("li");
        li.innerText = college.name;
        list.appendChild(li);
    }
}

async function getCollegeDetails(country){
    try{
        let collegeData = await axios.get(url + country);
        return collegeData.data;
    } catch (e){
        console.log("error : ", e);
        return [];
    }
}