const container = document.querySelector(".draw-area");
const slider = document.querySelector('#gridSize');
const output = document.querySelector('#sizeOut');
const chkDarken = document.querySelector('#darken')
const chkRandomize = document.querySelector('#randomize')
output.textContent = `Resolution: ${slider.value}`;

container.addEventListener('mouseover', function (event) {
    event.stopPropagation();
    if (event.target === this) return;

    // Extra credit: Darken the squares while drawing
    if (chkDarken.checked) event.target.style.opacity -= .1;

    // Extra credit: Randomize the colors
    if (chkRandomize.checked) {
        let R = Math.floor(Math.random() * 256);
        let G = Math.floor(Math.random() * 256);
        let B = Math.floor(Math.random() * 256);

        event.target.style.setProperty('--rnd-background', `rgb(${R}, ${G}, ${B})`);
    }

    event.target.classList.add("draw");
});

createGrid(slider.value);

slider.oninput = function () {
    destroyGrid();
    createGrid(this.value);
    output.textContent = `Resolution: ${this.value}`;
};

chkRandomize.onchange = function () {
    destroyGrid();
    createGrid(slider.value);
}

function createGrid(gridSize) {
    for (let y = 0; y < gridSize; y++) {
        const row = document.createElement('div');
        row.classList.add("row")

        for (let x = 0; x < gridSize; x++) {
            const cell = document.createElement('div');
            cell.classList.add("cell");

            // TODO? implement a colorpicker maybe someday
            let R = 104;
            let G = 255;
            let B = 204;

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
