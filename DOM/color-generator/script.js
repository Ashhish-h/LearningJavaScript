let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let heading = document.querySelector("h2");
    let randomColor = getRandomColor();
    heading.innerText = randomColor;
});


function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let bluw = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${blue}, ${green})`;
    return color;
}