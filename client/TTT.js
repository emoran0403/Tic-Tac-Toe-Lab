let cells = document.querySelectorAll('.row > div'); // This lets us select each div in each row, thus giving us the 9 cells.

for (let i = 0; i < cells.length; i++) { // This adds an event listener to each cell.
    cells[i].addEventListener('click', cellClicked );
}

let turnCount = 0; // This allows the game to determine whether to place an X or O.
var x = document.getElementById("resetbutton"); // This lets us select the reset button, allowing us to make appear when a game concludes.
var y = document.getElementById("winstatus"); // This lets us select the 'h2' element that will display the result of the game.
 
function checkCells(a, b, c, d) {
    return cells[a].textContent === d && cells[b].textContent === d && cells[c].textContent === d;
}

function cellClicked(ev) {
    
/*
turnCount < 9 is true when the game has not reached a conclusion as winning sets it to 10, and a draw occurs at 9.
This prevents additional turns after a player has won.
turnCount remainder determines if the game is at an even (X) turn, or an odd (O) turn.
ev.target.textContent === " " only allows the function to target a cell with a space character, which are in empty cells by default.  
This prevents the overwriting of a cell that already has an X with an O or vice versa.
*/
    if (turnCount < 9 && turnCount % 2 === 0 && ev.target.textContent === " ") {
        ev.target.textContent = 'X';
        console.log(ev.target.textContent + " was just placed!");
        ++turnCount;
    } 
    
    if (turnCount < 9 && turnCount % 2 === 1 && ev.target.textContent === " ") {
        ev.target.textContent = 'O';
        console.log(ev.target.textContent + " was just placed!");
        ++turnCount; 
    }

/*
All win conditions for X.
x and y.style.display = "inline" will reveal the reset button and the win status message, respectively.
y.textContent - This sets the win status message to "X Wins!".
*/

if (checkCells(0, 1, 2, 'X') ||
        checkCells(3, 4, 5, 'X') ||
        checkCells(6, 7, 8, 'X') ||
        checkCells(0, 3, 6, 'X') ||
        checkCells(1, 4, 7, 'X') ||
        checkCells(2, 5, 8, 'X') ||
        checkCells(0, 4, 8, 'X') ||
        checkCells(6, 4, 2, 'X')) {
        console.log("X Wins!");
        turnCount = 10;
        x.style.display = "inline";
        y.style.display = "inline";
        y.textContent = "X Wins!";
    }


/*
All win conditions for O.
x and y.style.display = "inline" will reveal the reset button and the win status message, respectively.
y.textContent - This sets the win status message to "O Wins!.
*/

if (checkCells(0, 1, 2, 'O') ||
        checkCells(3, 4, 5, 'O') ||
        checkCells(6, 7, 8, 'O') ||
        checkCells(0, 3, 6, 'O') ||
        checkCells(1, 4, 7, 'O') ||
        checkCells(2, 5, 8, 'O') ||
        checkCells(0, 4, 8, 'O') ||
        checkCells(6, 4, 2, 'O')) {
        console.log("O Wins!");
        turnCount = 10;
        x.style.display = "inline";
        y.style.display = "inline";
        y.textContent = "O Wins!";
    }

/*
Draw condition.
x and y.style.display = "inline" will reveal the reset button and the win status message, respectively.
y.textContent - This sets the win status message to "Draw!" .
*/

if (turnCount === 9) {
    x.style.display = "inline";
    y.style.display = "inline";
    y.textContent = "Draw!";
}

}