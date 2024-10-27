document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board > div");
    let isXturn = true;

    squares.forEach(square => {
        square.classList.add("square");

        // Add click event for placing X or O
        square.addEventListener("click", () => {
            if (square.textContent === "") {
                if (isXturn) {
                    square.textContent = "X";
                    square.classList.add("X");
                } else {
                    square.textContent = "O";
                    square.classList.add("O");
                }
                isXturn = !isXturn;
            }
        });

        // Add mouseenter event to add hover class
        square.addEventListener("mouseenter", () => {
            square.classList.add("hover");
        });

        // Add mouseleave event to remove hover class
        square.addEventListener("mouseleave", () => {
            square.classList.remove("hover");
        });
    });
});
