let generateButton = document.querySelector('#generate');
generateButton.addEventListener('click', generateGrid);

let gridContainer = document.querySelector('#grid-container');

const colors = ['red', 'green', 'blue', 'pink', 'purple', 'brown', 'gray', 'yellow', 'orange']

function getInput() {
    let input = prompt('How many columns/rows would you like? (numbers no higher than 100 only)');
    if (input < 101) {
        return parseInt(input);
    } else {
        alert("Invalid Selection. Try again.");
        getInput();
    }
}

function generateGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    let gridQuantity = getInput();
    for (let i = 0, y = gridQuantity; i < y; i++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        gridRow.style.display = 'flex';
        gridContainer.appendChild(gridRow);
        for (let n = 0, z = gridQuantity; n < z; n++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.border = '1px solid black';
            square.style.aspectRatio = '1 / 1';
            square.style.width = '100%';
            let color = colors[Math.floor(Math.random() *colors.length)];
            let saturation = 1
            square.addEventListener('mouseover', (e) => {
                if (e.buttons == 1) {
                    if (saturation < 10) {
                        square.style.filter = `saturate(${saturation * 10}%)`;
                        saturation++;
                    }
                }
                square.style.backgroundColor = color;
            })
            gridRow.appendChild(square);
        }
    }
}