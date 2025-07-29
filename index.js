let grid = document.querySelector("#container");

function createGrid(size) {
    grid.childNodes.forEach(child => {
        child.remove();
    })

    for (let i = 0; i < size; i++) {
        let col = document.createElement("div");
        col.setAttribute("id", "col");
        grid.appendChild(col);
    }
    let cols = document.querySelectorAll("#col");

    cols.forEach(col => {
        for (let i = 0; i < size; i++) {
            let div = document.createElement("div");
            col.appendChild(div);
        }
    });

    cols.forEach(col => {
        col.addEventListener("mouseover", (event) => {
            let target = event.target;
            target.style.backgroundColor = "blue";
        })
    });
}

createGrid(16);