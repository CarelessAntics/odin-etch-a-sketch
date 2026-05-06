const container = document.querySelector(".draw-container");
const cellCount = 16;
const slider = document.querySelector('#gridSize');
const output = document.querySelector('#sizeOut');
output.textContent = `Resolution: ${slider.value}`;

// Extra credit: darkening effect:
container.addEventListener('mouseover', function (event) {
    event.stopPropagation();
    if (event.target === this) return;

    event.target.style.opacity -= .1;
})


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

            let R = Math.floor(Math.random() * 256);
            let G = Math.floor(Math.random() * 256);
            let B = Math.floor(Math.random() * 256);

            cell.style.setProperty('--rnd-background', `rgb(${R}, ${G}, ${B})`);
            cell.style.opacity = 1;

            row.appendChild(cell);
        }

        container.appendChild(row);
    }
}

function destroyGrid() {
    container.textContent = "";
}
