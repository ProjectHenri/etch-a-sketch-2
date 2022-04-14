const GRID = document.querySelector('#grid');
const BUTTONS = document.querySelectorAll('button');
const DEFAULT_GRID = 24;
let divColor = 'rgb(255,255,255)'; // Default grid color
let isDrawing = true;
let colorChoice = ''; // User needs to pick an option from the menu to start drawing

window.onload = createGrid(DEFAULT_GRID); // Create initial grid when user loads the page

function createGrid(size){
    removeExistingGrid();
    populateGrid(size);
}

function removeExistingGrid(){
    while(GRID.firstChild){
        GRID.removeChild(GRID.firstChild);
    }
}

function populateGrid(squares){
    GRID.style.gridTemplate = `repeat(${squares}, 1fr) / repeat(${squares}, 1fr)`;
    for(let i = 0; i<squares ** 2;  i++){
        let div = document.createElement('div')
        div.classList.add('divBg', 'divBorder')
        div.setAttribute('draggable', 'false');
        GRID.appendChild(div);
        div.addEventListener('mouseover', colorSquares);
    }
}

function colorSquares(e){
    if(isDrawing){
        switch(colorChoice){
            case 'pencil':
                divColor = 'rgb(60,60,60)';
                e.target.style.backgroundColor = divColor;
            break;
            case 'eraser':
                divColor = 'rgb(255,255,255)';
                e.target.style.backgroundColor = divColor;
            break;
            case 'rainbow':
                divColor = `rgb(
                                ${Math.floor(Math.random()*256)},
                                ${Math.floor(Math.random()*256)},
                                ${Math.floor(Math.random()*256)}
                            )`;
                e.target.style.backgroundColor = divColor;
            break;
            case 'shading':
                divColor = 'rgb(60,60,60)';
                e.target.style.backgroundColor = divColor;
            break;
        }
    }
}

/* Add functionality to the user interface*/

for(let i = 0; i<BUTTONS.length; i++){
    let btn = BUTTONS[i];
    switch(btn.getAttribute('id')){
        case 'pencil':
            btn.addEventListener('click', () => colorChoice = 'pencil');
            btn.addEventListener('click', toggleStates);
        break;
        case 'eraser':
            btn.addEventListener('click', () => colorChoice = 'eraser');
            btn.addEventListener('click', toggleStates);
        break;
        case 'rainbow':
            btn.addEventListener('click', () => colorChoice = 'rainbow');
            btn.addEventListener('click', toggleStates);
        break
        case 'shading':
            btn.addEventListener('click', () => colorChoice = 'shading');
            btn.addEventListener('click', toggleStates);
        break;
        case 'clear':
            btn.addEventListener('click', clearGrid);
        break;
        case 'gridSize':
            btn.addEventListener('click', getSize);
        break;
        case 'toggleBorder':
            btn.addEventListener('click', toggleBorder);
        break;
    }
}

function toggleStates(e){
    for(let i = 0; i<BUTTONS.length; i++){  // If present, remove the "selected" class from all elements
        BUTTONS[i].classList.remove('selected')
        }
    e.target.classList.add('selected'); // If applicable, add the "selected" class to the element that was clicked

}

function clearGrid(){
    for(let i = 0; i < GRID.children.length; i++){
        GRID.children[i].style.backgroundColor = 'rgb(255,255,255)';
    }
}
function getSize(){
    let squares = Number(prompt('Enter a size ranging from 2-64'));
    if(squares === NaN || squares > 64 || squares < 2){
        alert('Invalid input. Enter a value between 2-64');
        return;
    }
    createGrid(squares);
}

function toggleBorder(){
    for(let i = 0; i < GRID.children.length; i++){
        GRID.children[i].classList.toggle('divBorder');
    }
}