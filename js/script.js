const GRID = document.querySelector('#grid');
const gridSize = document.querySelector('#gridSize')
gridSize.addEventListener('click', createGrid);

function createGrid(){
    let size = prompt('Select your grid size. Max 64.', 100);
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
        div.classList.add('square')
        GRID.appendChild(div);
    }
}