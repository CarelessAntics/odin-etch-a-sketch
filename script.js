const container = document.querySelector(".container");
const cellCount = 16

for (let y = 0; y < cellCount; y++) {
    const row = document.createElement('div');
    row.classList.add("row")

    for (let x = 0; x < cellCount; x++) {
        const cell = document.createElement('div');
        cell.classList.add("cell");
        row.appendChild(cell);
    }

    container.appendChild(row);
}