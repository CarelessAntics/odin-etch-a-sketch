const container = document.querySelector(".draw-container");
const cellCount = 16;
const slider = document.querySelector('#gridSize');
const output = document.querySelector('#sizeOut');
output.textContent = `Resolution: ${slider.value}`;


createGrid(slider.value);

slider.oninput = function () {
    destroyGrid();
    createGrid(this.value);
    output.textContent = `Resolution: ${this.value}`;
};

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

function destroyGrid() {
    container.textContent = "";
}
