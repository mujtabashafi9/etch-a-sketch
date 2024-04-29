let currentColor;
window.onload = () => {
    setTimeout(() => {
        const colorPicker = document.querySelector("#color-picker");
        const deleteGrid = document.querySelector("#delete-grid");
        const grids = document.querySelector("#grids");
        let createGrid = document.querySelector("#create-grid");
        let removeGrid = document.querySelector("#remove-grid-color");
        currentColor = colorPicker.value;

        colorPicker.addEventListener("change", () => {
            currentColor = colorPicker.value;
        });

        createGrid.addEventListener("click", () => {
            let userInput = parseInt(prompt("State the size of your grid (1-100): "), 10);
            if (isNaN(userInput) || userInput <= 0 || userInput > 100) {
                userInput = 16;
            }
            initializeGrid(userInput, grids);
        });

        deleteGrid.addEventListener("click", () => {
            grids.innerHTML = '';
        });

        removeGrid.addEventListener("click", () => {
            let rows = document.querySelectorAll(".row");
            rows.forEach(row => {
                row.style.backgroundColor = "white";
            });
        });

    }, 100);
}

function initializeGrid(userInput, grids) {
    grids.innerHTML = '';
    let isDrawing = false;

    for (let i = 0; i < userInput; i++) {
        let column = document.createElement("div");
        column.style.display = "flex";
        column.style.flexDirection = "column";
        column.style.border = "0.2px solid black";
        column.style.flex = "1";
        grids.appendChild(column);

        for (let x = 0; x < userInput; x++) {
            let row = document.createElement("div");
            row.classList.add("row");
            row.style.flex = "1";
            row.style.border = "0.2px solid black";
            column.appendChild(row);
        }
    }

    grids.style.visibility = "visible";

    grids.addEventListener("mousedown", (e) => {
        e.preventDefault();
        isDrawing = true;
    });

    grids.addEventListener("mouseup", () => {
        isDrawing = false;
    });

    let rows = document.querySelectorAll(".row");
    rows.forEach(row => {
        row.addEventListener("mousemove", () => {
            if (isDrawing) {
                row.style.backgroundColor = currentColor;
            }
        });

        row.addEventListener("click", () => {
            row.style.backgroundColor = currentColor;
        });
    });
}







