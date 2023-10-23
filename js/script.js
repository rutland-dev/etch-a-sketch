let generateButton = document.querySelector('#generate');
generateButton.addEventListener('click', generateGrid);

let gridContainer = document.querySelector('#grid-container');


function generateGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    for (let i = 0; i < 16; i++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        gridRow.style.display = 'flex';
        gridRow.style.alignItems = 'center';
        gridRow.style.justifyContent = 'center';
        gridContainer.appendChild(gridRow);
        for (let n = 0; n < 16; n++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.border = '1px solid black';
            square.style.width = '75px';
            square.style.height = '75px';
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = 'blue';
            })
            gridRow.appendChild(square);
        }
    }
}