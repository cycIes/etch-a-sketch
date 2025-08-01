let grid = document.querySelector("#container");

function createGrid(size) {
    grid.replaceChildren();

    for (let i = 0; i < size; i++) {
        let col = document.createElement("div");
        col.setAttribute("id", "col");
        grid.appendChild(col);
    }
    let cols = document.querySelectorAll("#col");

    cols.forEach(col => {
        for (let i = 0; i < size; i++) {
            let div = document.createElement("div");
            div.style.opacity = .10;
            col.appendChild(div);
        }
    });

    cols.forEach(col => {
        col.addEventListener("mouseover", (event) => {
            let target = event.target;
            target.style.opacity = parseFloat(target.style.opacity) + .10;
        })
    });
}

let newGrid = document.querySelector("button");

newGrid.addEventListener("click", () => {
    let size = parseInt(prompt("How many squares tall/wide would you like your grid to be?"));
    if (size > 100) {
        size = 100;
    }
    createGrid(size);
})