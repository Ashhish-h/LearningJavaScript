let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let heading = document.querySelector("h2");
    let randomColor = getRandomColor();
    heading.innerText = randomColor;
    let box = document.getElementById("changedColor");

    box.style.backgroundColor = randomColor;
});


function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}