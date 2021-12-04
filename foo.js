const body = document.body
const container = document.querySelector(".container")
const clearGridButton = document.querySelector("#clearGrid")

clearGridButton.addEventListener("click", newGrid)

gridDraw(16);

function squareSelector () {
    const squares = container.querySelectorAll("div.square");
    squares.forEach(i => {
        i.addEventListener("mouseenter", mouseEnter)
    });
}

function gridDraw(input) {
    container.style.setProperty("--grid-number", input);
    for (let i = 1; i<=(input*input); i++) {
        const gridDiv = document.createElement("div")
        container.appendChild(gridDiv)
        gridDiv.classList.add("square")
        gridDiv.classList.add(i)
        squareSelector()
    }
}

function mouseEnter() {
    this.classList.add("black")
}


function newGrid() {
    clearGrid()
    createGrid()
}

function clearGrid() {
    const square = container.querySelectorAll("div.square")
    for (i=0; i < square.length; i++) {
        square[i].classList.remove("black")
    }
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
}

function createGrid() {
    let input  = 0
    
    while(input < 1 | input > 100) {
        input = prompt("How many squares per side would you like for the new grid? Must be from 1-100.");
    }
    gridDraw(input)
}
