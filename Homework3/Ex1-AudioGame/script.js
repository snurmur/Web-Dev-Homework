let moves = 1;
let array = [];
let playerArray = [];
let choice = 0;
let soundButton1 = new Audio('watch-alarm-102969.mp3');
let soundButton2 = new Audio('spoon-against-pan-97408.mp3');
let soundButton3 = new Audio('tick-tock-95555.mp3');
let soundButton4 = new Audio('vibrating-thud-39536.mp3');


function addOne() {
    playerArray.push(1);
    soundButton1.play();
    checkMoves();
}

function addTwo() {
    playerArray.push(2);
    soundButton2.play();
    checkMoves();
}

function addThree() {
    playerArray.push(3);
    soundButton3.play();
    checkMoves();
}

function addFour() {
    playerArray.push(4);
    soundButton4.play();
    checkMoves();
}
function chooseMove() {
    if (choice !== 0) unhighlight(choice);
    choice = Math.floor(Math.random() * 4 + 1);
    array.push(choice);
    if(choice === 1)soundButton1.play();
    if(choice === 2)soundButton2.play();
    if(choice === 3)soundButton3.play();
    if(choice === 4)soundButton4.play();
    console.log(choice);
    highlightButton(choice);
    setTimeout(function() {
      unhighlight(choice);
    }, moves * 1000);
}

function computerTurn() {
    console.log('Computer turn started');
    for (let i = 0; i < moves; i++) {
        setTimeout(
            chooseMove, (i+1) * 1000
        )  
        
    }
}
function unhighlight(buttonNumber){
    console.log('unhighlight');
    document.getElementById(`button${buttonNumber}`).classList.remove('highlight');
}
function highlightButton(buttonNumber) {
    console.log('highlight')
    document.getElementById(`button${buttonNumber}`).classList.add('highlight');
}


function checkMoves() {
    if (playerArray.length === moves) {
        if (array.toString() === playerArray.toString()) {
            moves++;
            array = [];
            playerArray = [];
            setTimeout(function () {
                computerTurn();
            }, 1000);
        } else {
            alert("Game over");
            resetGame();
        }
    }
}

function resetGame() {
    array = [];
    playerArray = [];
    moves = 1;
}

function start() {
    computerTurn();
}
