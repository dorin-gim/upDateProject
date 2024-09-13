const WALL = 'WALL'
const FLOOR = 'FLOOR'
const BALL = 'BALL'
const GAMER = 'GAMER'

const GAMER_IMG = '<img src="img/gamer.png">'
const BALL_IMG = '<img src="img/ball.png">'

var gBoard
var gGamerPos
var ballCollected = 0
var interval 
var levelInterval = 5000



function onInitGame() {
    gGamerPos = { i: 2, j: 9 }
    gBoard = buildBoard()
    renderBoard(gBoard)

    interval = setInterval(() => {
        getEmptyCells()
        renderBoard(gBoard)
    }, levelInterval);
    
}

function buildBoard() {
    const board = []
    const rowsCount = 10
    const colsCount = 12
    
    for (var i = 0; i < rowsCount; i++) {
        board[i] = []
        for (var j = 0; j < colsCount; j++) {
            board[i][j] = { type: FLOOR, gameElement: null }
            if (i === 0 || i === rowsCount - 1 ||
                j === 0 || j === colsCount - 1) {
                board[i][j].type = WALL
            }
        }
    }
    
    board[gGamerPos.i][gGamerPos.j].gameElement = GAMER
    board[5][5].gameElement = BALL
    board[7][2].gameElement = BALL
    return board
}


function renderBoard(board) {

    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < board[0].length; j++) {
            const currCell = board[i][j]
            var cellClass = getClassName({ i: i, j: j })

            if (currCell.type === FLOOR) cellClass += ' floor'
            else if (currCell.type === WALL) cellClass += ' wall'

            strHTML += `<td class="cell ${cellClass}"  onclick="moveTo(${i},${j})" >`

            if (currCell.gameElement === GAMER) {
                strHTML += GAMER_IMG
            } else if (currCell.gameElement === BALL) {
                strHTML += BALL_IMG
            }

            strHTML += '</td>'
        }
        strHTML += '</tr>'
    }
    const elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
}


function moveTo(i, j) {
    console.log({i, j});
    
    const targetCell = gBoard[i][j]
    if (targetCell.type === WALL) return

    const iAbsDiff = Math.abs(i - gGamerPos.i)
    const jAbsDiff = Math.abs(j - gGamerPos.j)

    if ((iAbsDiff === 1 && jAbsDiff === 0) ||
        (jAbsDiff === 1 && iAbsDiff === 0)) {

        if (targetCell.gameElement === BALL) {
            console.log('Collecting!')
            ballCollected ++
            document.querySelector(".collectedBalls").innerHTML = ` ${ballCollected}`
        }

        gBoard[gGamerPos.i][gGamerPos.j].gameElement = null
        renderCell(gGamerPos, '')

        gBoard[i][j].gameElement = GAMER
        gGamerPos.i = i
        gGamerPos.j = j

        renderCell(gGamerPos, GAMER_IMG)

    } else {
        console.log('TOO FAR', iAbsDiff, jAbsDiff)
    }
    endGame();
}


function renderCell(location, value) {
    const cellSelector = '.' + getClassName(location)
    const elCell = document.querySelector(cellSelector)
    elCell.innerHTML = value
}

// Move the player by keyboard arrows
function onKey(ev) {
    const i = gGamerPos.i
    const j = gGamerPos.j
   
    switch (ev.key) {
        case 'ArrowLeft':
            moveTo(i, j - 1)
            break
        case 'ArrowRight':
            moveTo(i, j + 1)
            break
        case 'ArrowUp':
            moveTo(i - 1, j)
            break
        case 'ArrowDown':
            moveTo(i + 1, j)
            break
    }
}

function getClassName(location) {
    const cellClass = `cell-${location.i}-${location.j}`
    return cellClass
}

function getEmptyCells(){
    var emptyCell = [];
    for (let i = 0; i < gBoard.length; i++) {
        for(let j=0; j<gBoard[i].length; j++){
        if(gBoard[i][j].type === FLOOR && gBoard[i][j].gameElement !== BALL && gBoard[i][j].gameElement !== GAMER){
            emptyCell.push({i:i,j:j});
        }
    }
}
var random = Math.floor(Math.random()*emptyCell.length)
var cell = emptyCell[random];
gBoard[cell.i][cell.j].gameElement = BALL;
}

function endGame(){
    var emptyCell = [];
    for (let i = 0; i < gBoard.length; i++) {
        for(let j=0; j<gBoard[i].length; j++){
        if(gBoard[i][j].type === FLOOR && gBoard[i][j].gameElement === BALL || gBoard[i][j].gameElement === GAMER){
            emptyCell.push({i:i,j:j});
        }
    }
}
if(emptyCell.length === 1){
    clearInterval(interval)
    document.querySelector(".restartButton").innerHTML = ` <button class="new-game" onclick="newGame()">Restart</button>`
    document.querySelector(".youWin").innerHTML = `YOU WIN!`
    
}else{
    console.log("keep tryyyyyy");
}
}

function onInitGameLevels(){
    document.getElementById("eazy").style.backgroundColor = 'rgb(59, 230, 12)' ;
    chooseLevel()
    onInitGame()
}

function newGame(){
    ballCollected = 0
    document.querySelector(".collectedBalls").innerHTML = ballCollected
    onInitGame();
    document.querySelector(".youWin").innerHTML = ""
}

function chooseLevel(level){
    clearInterval(interval)
    switch (level) {
        case "eazy":
            levelInterval = 5000
            document.getElementById("eazy").style.backgroundColor = 'rgb(59, 230, 12)' ;
            document.getElementById("medium").style.backgroundColor = '';
            document.getElementById("hard").style.backgroundColor = '';
            document.getElementById("superHard").style.backgroundColor = '';
            newGame()
            break;
        case "medium":
            levelInterval = 2500
            document.getElementById("medium").style.backgroundColor = 'rgb(59, 230, 12)' ;
            document.getElementById("eazy").style.backgroundColor = '';
            document.getElementById("hard").style.backgroundColor = '';
            document.getElementById("superHard").style.backgroundColor = '';
            newGame()
            break;
        case "hard":
            levelInterval = 1700
            document.getElementById("hard").style.backgroundColor = 'rgb(59, 230, 12)' ;
            document.getElementById("eazy").style.backgroundColor = '';
            document.getElementById("medium").style.backgroundColor = '';
            document.getElementById("superHard").style.backgroundColor = '';
            newGame()
            break;
        case "superHard":
            levelInterval = 1000
            document.getElementById("superHard").style.backgroundColor = 'rgb(59, 230, 12)';
            document.getElementById("medium").style.backgroundColor = '';
            document.getElementById("eazy").style.backgroundColor = '';
            document.getElementById("hard").style.backgroundColor = '';
            newGame()
            break;
        default:
            break;
    }
}



