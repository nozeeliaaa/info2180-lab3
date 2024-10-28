// Wait until the DOM is fully loaded before running any code
document.addEventListener("DOMContentLoaded", function () {
    
    // Select all divs inside the game board as squares and initialize variables for the game
    const squares = document.querySelectorAll("#board div");
    let currentPlayer = "X"; // The current player, starting with "X"
    let isGameOver = false; // Flag to check if the game has ended
    const status = document.getElementById("status"); // Status message element
    
    // Select the "New Game" button for resetting the game
    const newGameButton = document.querySelector(".btn");

    /**
     * handleSquareClick - Handles the click event on each square.
     * Alternates between "X" and "O" when a square is clicked, if it's not already filled.
     * Checks for a winner after each move.
     */
    function handleSquareClick() {
        // Ensure the game is active and the square is empty before marking it
        if (!isGameOver && !this.classList.contains("X") && !this.classList.contains("O")) {
            // Assign the current player's mark to the square
            this.classList.add(currentPlayer);
            this.textContent = currentPlayer;
            
            // Alternate the current player between "X" and "O" after each move
            currentPlayer = currentPlayer === "X" ? "O" : "X";

            // Check if there is a winning combination
            checkWinner();
        }
    }

    /**
     * checkWinner - Checks all possible winning combinations to see if "X" or "O" has won.
     * Updates the status message and ends the game if a winner is found.
     */
    function checkWinner() {
        // Define the winning combinations as an array of arrays
        const winningCombination = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // The Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // The Columns
            [0, 4, 8], [2, 4, 6]             // and The Diagonals
        ];

        // Loop through each winning combination and check if all squares in a combination contain the same mark
        for (const combination of winningCombination) {
            const [a, b, c] = combination;

            // Check if "X" occupies all three squares in a winning combination
            if (
                squares[a].classList.contains("X") &&
                squares[b].classList.contains("X") &&
                squares[c].classList.contains("X")
            ) {
                isGameOver = true; // End the game if "X" wins
                status.classList.add("you-won"); // Apply winning style
                status.textContent = "Congratulations! X is the Winner!"; // Display winner message
                return; // Exit the function
            }
            // Check if "O" occupies all three squares in a winning combination
            else if (
                squares[a].classList.contains("O") &&
                squares[b].classList.contains("O") &&
                squares[c].classList.contains("O")
            ) {
                isGameOver = true; // End the game if "O" wins
                status.classList.add("you-won"); // Apply winning style
                status.textContent = "Congratulations! O is the Winner!"; // Display winner message
                return; // Exit the function
            }
        }
    }

    /**
     * handleMouseOver - Adds a hover effect on a square when the mouse is over it.
     * Provides a visual indication that the square can be clicked.
     */
    function handleMouseOver() {
        this.classList.add("hover"); // Add the "hover" class
    }

    /**
     * handleMouseLeave - Removes the hover effect when the mouse leaves the square.
     * Resets the appearance of the square to its original state.
     */
    function handleMouseLeave() {
        this.classList.remove("hover"); // Remove the "hover" class
    }

    /**
     * resetGame - Resets the game to its original state.
     * Clears all squares, resets the status message, and sets the game variables back to default.
     */
    function resetGame() {
        // Clear each square on the board
        squares.forEach((square) => {
            square.classList.remove("X", "O"); // Remove "X" and "O" classes
            square.textContent = ""; // Clear the text inside the square
        });

        // Reset game variables to start a new game
        currentPlayer = "X";
        isGameOver = false;

        // Reset the status message and styling
        status.classList.remove("you-won");
        status.textContent = "Move your mouse over a square and click to play an X or an O.";
    }

    /**
     * Adds event listeners to each square for interactivity.
     * Sets up the game board squares with hover effects and click functionality.
     */
    squares.forEach((square) => {
        square.classList.add("square"); // Add the square class to each div for styling

        // Add event listeners for hover effects
        square.addEventListener("mouseover", handleMouseOver);
        square.addEventListener("mouseleave", handleMouseLeave);

        // Add click event listener for marking "X" or "O"
        square.addEventListener("click", handleSquareClick);
    });

    // Add an event listener to the New Game button to reset the game when clicked
    newGameButton.addEventListener("click", resetGame);
});
