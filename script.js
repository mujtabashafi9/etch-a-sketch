// loop runs 16 times
// 1 16 x 16 generates each time 




document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 16; i++) {
        const grids = document.querySelector("#grids");
        let column = document.createElement("div");
        column.style.display = "flex";
        column.style.flexDirection = "column";
        column.style.border = "0.2px solid black";
        column.style.flex = "1";
        grids.appendChild(column);
        for (let x = 0; x < 16; x++) {
            let row = document.createElement("div");
            row.style.flex = "1";
            row.style.border = "0.2px solid black";
            column.appendChild(row);
        }
    }
})



