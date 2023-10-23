let generateButton = document.querySelector('#generate');
generateButton.addEventListener('click', generateGrid);

let gridContainer = document.querySelector('#grid-container');


function generateGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    let gridQuantity = prompt('How many columns/rows would you like? (numbers only)');
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
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = 'blue';
            })
            gridRow.appendChild(square);
        }
    }
}