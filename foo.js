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
/* Random RGB color Etch-A-Sketch Mode. 
function mouseEnter() {
    console.log(randomNumbers()[0])
    this.style.backgroundColor = "rgb(" + (randomNumbers()[0]) + "," + (randomNumbers()[1]) + "," + (randomNumbers()[2]) + ")";
    console.log(this.style.backgroundColor)
    this.style.backgroundColor = (randomNumbers().randomNumberArray[0]),randomNumbers().randomNumberArray[1],randomNumbers().randomNumberArray[2];

}
*/

/* Black 10% each time Etch-A-Sketch Mode. */
function mouseEnter() {
    let squareBgColor = window.getComputedStyle(this).getPropertyValue("background-color");
    squareBgColor = squareBgColor,toString()
    let rgbaValues = squareBgColor.split("(")
    console.log(rgbaValues)
    rgbaValues[1] = rgbaValues[1].replace(")", "")
    console.log(rgbaValues)
    rgbaValues = rgbaValues[1]
    rgbaValues = rgbaValues.split(", ")
    console.log(rgbaValues) 
    if (typeof rgbaValues[3] != "undefined" ) {
        rgbaValues[3] = (rgbaValues[3] - 0.1)
        this.style.backgroundColor = "rgb(" + rgbaValues[0] + ","
        + rgbaValues[1] + "," + rgbaValues[2] + "," + (rgbaValues[3]) + ")";
    }
    else {
        rgbaValues[3] = 0.9
        this.style.backgroundColor = this.style.backgroundColor = "rgb(" + rgbaValues[0] + ","
        + rgbaValues[1] + "," + rgbaValues[2] + "," + (rgbaValues[3]) + ")";
    }
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

function randomNumbers() {
    let ran1 = (Math.random()*255)
    let ran2 = (Math.random()*255)
    let ran3 = (Math.random()*255)
    let randomNumberArray = [ran1,ran2,ran3]
    return randomNumberArray
}
