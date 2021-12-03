const body = document.body
const container = document.querySelector(".container")
/*function gridDraw() {
    for (let i = 1; i<=256; i++) {
        const gridDiv = document.createElement("div")
        container.appendChild(gridDiv)
        gridDiv.classList.add("square")
        gridDiv.classList.add(i)
    }
}
*/
function gridDraw(input) {
    container.style.setProperty("--grid-number", input);
    for (let i = 1; i<=(input*input); i++) {
        const gridDiv = document.createElement("div")
        container.appendChild(gridDiv)
        gridDiv.classList.add("square")
        gridDiv.classList.add(i)
    }
}
gridDraw(16);

const squares = container.querySelectorAll("div.square");
squares.forEach(i => {
    i.addEventListener("mouseenter", mouseEnter)
    i.addEventListener("mouseleave", mouseLeave)
});


function mouseEnter() {
    this.classList.add("black")
}

function mouseLeave() {

}

const clearGridButton = document.querySelector("#clearGrid")
clearGridButton.addEventListener("click", clearGridFunction)

function clearGridFunction() {
    const square = container.querySelectorAll("div.square")
    for (i=0; i < square.length; i++) {
        square[i].classList.remove("black")
    }

}