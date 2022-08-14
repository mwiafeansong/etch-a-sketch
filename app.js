const gridContainer = document.querySelector('.grid-container');
const gridItems = gridContainer.children;
const gridSize = document.querySelector('#grid-size-chooser');
const sketchBtn = document.querySelector('#sketch');
const kaleidoscopeBtn = document.querySelector('#kaleidoscope');
const eraserBtn = document.querySelector('#eraser');
const clearBtn = document.querySelector('#clear');



function setGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        const block = document.createElement('div');
        block.classList.add('grid-item');
        gridContainer.appendChild(block);
    }
}

function resetGrid() {
    while (gridContainer.firstElementChild) {
        gridContainer.removeChild(gridContainer.firstElementChild);
    }
}

function getGridSize() {
    let gridSizeChoice = prompt("Enter Grid Size (1 to 100);");
    if (gridSizeChoice <= 0 || gridSizeChoice >= 100) {
        gridSizeChoice = prompt('Invalid. Choose a number between 1 and 100');
    }
    resetGrid();
    setGrid(gridSizeChoice);
}

function sketch() {
    for (const item of gridItems) {
        item.addEventListener('mouseover', () => {
            item.style.cssText = `background: black;`
        })
    }
}


function getRandomColor() {
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    let randomColor = randomNumber.toString(16);
    return randomColor;
}

function getKaleidoscope() {
    for (const item of gridItems) {
        item.addEventListener('mouseover', () => {
            let randColor = getRandomColor();
            item.style.background = `#${randColor}`;
        })
    }
}

function erase() {
    for (const item of gridItems) {
        item.addEventListener('mouseover', () => {
            item.style.background = '#fff';
        })
    }
}

function clearGrid() {
    for (const item of gridItems) {
        item.style.background = '#fff';
    }
}

setGrid(16);
gridSize.addEventListener('click', getGridSize);
sketchBtn.addEventListener('click', sketch);
kaleidoscopeBtn.addEventListener('click', getKaleidoscope);
eraserBtn.addEventListener('click', erase);
clearBtn.addEventListener('click', clearGrid);







