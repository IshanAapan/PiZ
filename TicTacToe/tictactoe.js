console.log("Welcome to Tic Tac Toe Game!!");

let _rowContainer = document.getElementById("rowContainer_id");
console.log("rowContainer_id",_rowContainer);

let _board = document.getElementById('board');
console.log("Board", _board);

let _cell = document.getElementsByClassName("cell");
console.log("Cell", _cell);

const players = ['X', 'O'];

let currentPlayer = players[0];
console.log("Player", currentPlayer);

const msg = document.createElement("h1");
msg.textContent = "X's Turn!";
msg.style.textAlign = "center";
msg.style.margin = "3rem 0";
msg.style.userSelect = "none";
_rowContainer.after(msg);

const winningPossible = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let gameOver = false;

for (let i = 0; i < _cell.length; i++) {
    _cell[i].addEventListener('click', () => {
        if (gameOver || _cell[i].value !== '') {
            return;
        }
        console.log("Cell", _cell[i]);
        _cell[i].value = currentPlayer;

        if (checkWin(currentPlayer)) {
            msg.textContent = `${currentPlayer} Won!`;
            gameOver = true;
            return;
        }

        if (checkTie()) {
            msg.textContent = `Game is tied!`;
            gameOver = true;
            return;
        }
        currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0];
        console.log("CurrentPlayer", currentPlayer);
        msg.textContent = `${currentPlayer}'s Turn!`;
    });
}

function checkWin(currentPlayer) {
    for (let i = 0; i < winningPossible.length; i++) {
        const [a, b, c] = winningPossible[i];
        if (_cell[a].value === currentPlayer && _cell[b].value === currentPlayer && _cell[c].value === currentPlayer) {
            return true;
        }
    }
    return false;
}

function checkTie() {
    for (let i = 0; i < _cell.length; i++) {
        if (_cell[i].value === '') {
            return false;
        }
    }
    return true;
}

function restartButton() {
    for (let i = 0; i < _cell.length; i++) {
        _cell[i].value = "";
    }
    msg.textContent = `X's turn!`;
    currentPlayer = players[0];
    gameOver = false;
}
