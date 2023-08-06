const sketchPad = document.querySelector('#sketch-pad')

let input = parseInt(prompt("Enter the number of grids you want !"))


while (input>100 || isNaN(input)) {
    alert("The input should be less than 100 and a number")
    input = parseInt(prompt("Enter the number of grids you want !"))
} 

for (i=0;i<input*input;i++) { 
    //loop that adds number of divs as per user specified number
    const gridbox = document.createElement('div');
    gridbox.classList.add('gridbox');
    gridbox.textContent = 'h';
    sketchPad.appendChild(gridbox);
    let calculatedside = Math.sqrt(250000/(input*input))
    gridbox.style.width = calculatedside+"px";
    gridbox.style.height = calculatedside+"px";
    console.log(calculatedside)      
}



