const container = document.querySelector('#container')

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
    container.appendChild(gridbox);       
}



