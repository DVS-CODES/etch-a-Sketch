const sketchPad = document.querySelector('#sketch-pad')
const resetButton = document.querySelector('.reset')
const classicButton = document.querySelector('.classic')
const randomButton = document.querySelector('.random')
let input = parseInt(prompt("Enter the number of grids you want !"))

function inputChecker() {
    while (input>100 || isNaN(input)) {
        alert("The input should be less than 100 and a number")
        input = parseInt(prompt("Enter the number of grids you want !"))
    }
}

function randomColorGenerator () {
    //generates 3 random numbers for a random RGB color
    let num1 = Math.floor(Math.random()*1000)
    let num2 = Math.floor(Math.random()*1000)
    let num3 = Math.floor(Math.random()*1000)
    
    let gridBoxColor = `rgb(${num1},${num2},${num3})`
    return gridBoxColor;
}

function randomColorGridGenerator() {
    
    for (i=0;i<(input*input);i++) { 
        //loop that adds number of divs as per user specified number
        const gridbox = document.createElement('div');
        gridbox.classList.add('gridbox');
        sketchPad.appendChild(gridbox);
    
        //calculates the side size that fits the sketchpad.
        let calculatedside = Math.sqrt(250000/(input*input))
        gridbox.style.width = calculatedside+"px";
        gridbox.style.height = calculatedside+"px";
         
        //Listens for mouse hovering
        gridbox.addEventListener("mouseover", function pen () {
        gridbox.style.backgroundColor = randomColorGenerator();
        })
    }
}

function classicColorGridGenerator() {
    
    for (i=0;i<(input*input);i++) { 
        //loop that adds number of divs as per user specified number
        const gridbox = document.createElement('div');
        gridbox.classList.add('gridbox');
        sketchPad.appendChild(gridbox);
    
        //calculates the side size that fits the sketchpad.
        let calculatedside = Math.sqrt(250000/(input*input))
        gridbox.style.width = calculatedside+"px";
        gridbox.style.height = calculatedside+"px";
         
        //Listens for mouse hovering
        gridbox.addEventListener("mouseover", function pen () {
        gridbox.style.backgroundColor = 'black';
        })
    }
}


function gridRemover() {
    for (i=0;i<(input*input);i++) {
        sketchPad.removeChild(sketchPad.firstChild);
        
    }
}


inputChecker()
classicColorGridGenerator()

resetButton.addEventListener('click', function clear () {
    
    gridRemover()
    input = parseInt(prompt("Enter the number of grids you want !"))
    inputChecker()
    classicColorGridGenerator()
    }
)

classicButton.addEventListener('click', function () {
    
    gridRemover()
    classicColorGridGenerator()
    
})

randomButton.addEventListener('click', function () {
    
    gridRemover()
    randomColorGridGenerator()
    
})

