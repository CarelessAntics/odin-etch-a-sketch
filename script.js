const container = document.querySelector(".container");
const cellCount = 16;


createGrid(cellCount);

function createGrid(gridSize) {
    for (let y = 0; y < gridSize; y++) {
        const row = document.createElement('div');
        row.classList.add("row")

        for (let x = 0; x < gridSize; x++) {
            const cell = document.createElement('div');
            cell.classList.add("cell");
            row.appendChild(cell);
        }

        container.appendChild(row);
    }
}