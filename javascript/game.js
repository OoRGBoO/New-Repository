// Step1 – the seed app:
// 1. Create a 4x4 gBoard Matrix containing Objects. Place 2 mines 
// manually when each cell’s isShown set to true. 
// 2. Present the mines using renderBoard() function.
// const BOARD = 'BOARD';
// const MINES;

var gBoard;

// gBoard = {
//     minesAroundCount: 4,
//     isShown: true,
//     isMine: false,
//     isMarked: true
// }

gLevel = {
    SIZE: 4,
    MINES: 2
};

gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

function initGame() {
    buildBoard()
    renderBoard()
}

console.log(buildBoard);
function buildBoard() {
    var board = []
    for (var i = 0; i < board.length; i++) {
        // board[i]
        for (var j = 0; j < board.length; j++) {
            var cell = { type: BOARD, gameElement: null };
            // board.push('')
        
        }
        gBoard = {
            minesAroundCount: 4,
            isShown: true,
            isMine: false,
            isMarked: true
        }
    }
    return gBoard
}

//Render the board as a <table> to the page.. but how do i present the mines?

function renderBoard() {
   var strHTML = '';
    for (var i = 0; i < 4; i++) {
        strHTML += `<table>`;
        for (var j = 0; j < 4; j++) {
           var board = strHTML;
            var currCell = board[i][j]
            currCell = createMat(gLevel)
            var cell = board[i][j]
            var elTab = document.querySelector('.table');
            elTab.innerHTML = currCell
        }
        board[i][j] = cell;
    }
    strHTML += `\t<td class="cell ' + `
}
