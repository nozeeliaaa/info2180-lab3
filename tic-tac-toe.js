document.addEventListener("DOMContentLoaded", () => {
    // Select all divs inside the game board
    const squares = document.querySelectorAll("#board > div");
    let isXturn = true; // Variable to track if it's X's turn

    // Loop through each square and add the 'square' class
    squares.forEach(square => {
        square.classList.add("square");

        // Add click event listener for each square
        square.addEventListener("click", () => {
            // Check if the square is already filled
            if (square.textContent === "") {
                if (isXturn) {
                    square.textContent = "X";
                    square.classList.add("X"); // Add class for styling
                } else {
                    square.textContent = "O";
                    square.classList.add("O"); // Add class for styling
                }
                isXturn = !isXturn; // Toggle turn
            }
        });
    });
});
