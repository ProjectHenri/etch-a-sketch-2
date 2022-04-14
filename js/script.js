const GRID = document.querySelector('#grid');
const BUTTONS = document.querySelectorAll('button');
const DEFAULT_GRID = 24;

window.onload = createGrid(DEFAULT_GRID); // Create initial grid when user loads the page

for(let i = 0; i<BUTTONS.length; i++){
    switch(BUTTONS[i].getAttribute('id')){
        case 'clear':
            BUTTONS[i].addEventListener('click', clearGrid);
        break;
        case 'gridSize':
            BUTTONS[i].addEventListener('click', getSize);
        break;
        case 'toggleBorder':
            BUTTONS[i].addEventListener('click', toggleBorder);
        break;
    }
}

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
    GRID.style.gridTemplate = `repeat(${squares}, 1fr) / repeat(${squares}, 1fr)`
    for(let i = 0; i<squares ** 2;  i++){
        let div = document.createElement('div')
        div.classList.add('divBg', 'divBorder')
        GRID.appendChild(div);
    }
}

function clearGrid(){
    for(let i = 0; i < GRID.children.length; i++){
        GRID.children[i].style.backgroundColor = 'rgb(255,255,255)';
    }
}
function getSize(){
    let squares = Number(prompt('Type a size ranging from 2-64'));
    if(squares === NaN || squares > 64 || squares < 2){
        alert('Invalid input. Try typing a value from 2-64');
        return;
    }
    createGrid(squares);
}

function toggleBorder(){
    for(let i = 0; i < GRID.children.length; i++){
        GRID.children[i].classList.toggle('divBorder');
    }
}