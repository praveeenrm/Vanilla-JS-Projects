// Variables and constants
const playerOne = "X";
const playerTwo = "O";
let count = 0
// dictionary[1] = "Hello"
const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Selectors
const cells = document.querySelectorAll('.cell');
const endgame = document.querySelector('.endgame');
const text = document.querySelector('.text');
const replayButton = document.querySelector('button');

// MAIN Function
startGame();


// Event Listeners
replayButton.addEventListener('click', replay);

function replay() {
    endgame.style.display = 'none';
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = "";
        cells[i].style.color = 'black';
        cells[i].style.background = 'white';
    }
    count = 0;
}

// Function
function startGame() {
    endgame.style.display = 'none';
    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', turnOn);
    }
}


function turnOn(event) {
    if (count % 2 === 0 && cells[event.target.id].innerText === "" && count < 10) {
        cells[event.target.id].innerText = playerOne
        count += 1
    } else if (cells[event.target.id].innerText === "" && count < 10) {
        cells[event.target.id].innerText = playerTwo
        count += 1
    }

    checkWin();
}

function checkWin() { 
    for (let i =0 ; i< winCombinations.length; i++){
        let zero = winCombinations[i][0];
        let one = winCombinations[i][1];
        let two = winCombinations[i][2];

        if (cells[zero].innerText === "X" && cells[one].innerText === "X" && cells[two].innerText === "X") {
            changeBackground(zero, one, two);
            text.innerHTML = "X's Won"
            endgame.style.display = 'block'
            count = 100
        } else if (cells[zero].innerText === "O" && cells[one].innerText === "O" && cells[two].innerText === "O") {
            changeBackground(zero, one, two);
            text.innerHTML = "O's Won"
            endgame.style.display = 'block'
            count = 100
        } else if (count === 9){
            text.innerHTML = "DRAW"
            endgame.style.display = 'block'
            count = 100
        }
    }
}
function changeBackground(zero, one, two) {
    cells[zero].style.background = '#ed6663';
    cells[one].style.background = '#ed6663';
    cells[two].style.background = '#ed6663';
    cells[zero].style.color = 'white';
    cells[one].style.color = 'white';
    cells[two].style.color = 'white';
}