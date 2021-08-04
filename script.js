var playerTurn = "X"
var disableButtons = false

const Square = (() => {
    const Square = () => {
        var status = '';
        const checkStatus = () => status;
        
        const playTurn = (playerTurn) => {
            if (status !== '') return;
            if (disableButtons == true) return;
            if (playerTurn == 'X') status = "X";
            if (playerTurn == 'O') status = "O";
            if (checkWin(playerTurn)) return;
            updateDisplay();
            changeTurn();
        };
        const changeTurn = () => {
            playerTurn == 'X' ? playerTurn = 'O' : playerTurn = 'X';
        };
        const checkWin = playerTurn => {
            if (playerTurn == "X" && checkCombinations("X") == true ) {
                document.querySelector(".result").innerHTML = "Player two has won";
                console.log("X has won")
                disableButtons = true;
            } else if (playerTurn == "O" && checkCombinations("O") == true) {
                document.querySelector(".result").innerHTML = "Player one has won";
                console.log("O has won")
                disableButtons = true;
            } else checkCombinations();
        };
        return {checkStatus, checkStatus, playTurn, status}
    };  
    const resetBoard = () => {
        location.reload();
    };
    var One = Square();
    var Two = Square();
    var Three = Square();
    var Four = Square();
    var Five = Square();
    var Six = Square();
    var Seven = Square();
    var Eight = Square();
    var Nine = Square();
    return{resetBoard, One, Two, Three, Four, Five, Six, Seven, Eight, Nine};
})();

//Checks for all possible winning combinations in the gameboard
function checkCombinations(team) {
    disableTie = false
    if ((team == Square.One.checkStatus() && team == Square.Two.checkStatus() && team == Square.Three.checkStatus())
        || (team == Square.Four.checkStatus() && team == Square.Five.checkStatus() && team == Square.Six.checkStatus())
        || (team == Square.Seven.checkStatus() && team == Square.Eight.checkStatus() && team == Square.Nine.checkStatus())
        || (team == Square.One.checkStatus() && team == Square.Four.checkStatus() && team == Square.Seven.checkStatus())
        || (team == Square.Two.checkStatus() && team == Square.Five.checkStatus() && team == Square.Eight.checkStatus())
        || (team == Square.Three.checkStatus() && team == Square.Six.checkStatus() && team == Square.Nine.checkStatus())
        || (team == Square.One.checkStatus() && team == Square.Five.checkStatus() && team == Square.Nine.checkStatus())
        || (team == Square.Three.checkStatus() && team == Square.Five.checkStatus() && team == Square.Seven.checkStatus())) {
        disableTie = true;
        return true;
    }  
    if (checkTie() && disableTie == false) {
        document.querySelector(".result").innerHTML = "The game is a draw!";
    };  
};

function checkTie() {
    return ('' !== Square.One.checkStatus() && '' !== Square.Two.checkStatus() && '' !== Square.Three.checkStatus() 
        && '' !== Square.Four.checkStatus() && '' !== Square.Five.checkStatus() && '' !== Square.Six.checkStatus()
        && '' !== Square.Seven.checkStatus() && '' !== Square.Eight.checkStatus() && '' !== Square.Nine.checkStatus())
};


//Event listener for each square
var s1 = document.querySelector("#square-1")
    s1.onclick = () => Square.One.playTurn(playerTurn);
var s2 = document.querySelector("#square-2")
    s2.onclick = () => Square.Two.playTurn(playerTurn);    
var s3 = document.querySelector("#square-3")
    s3.onclick = () => Square.Three.playTurn(playerTurn);   
var s4 = document.querySelector("#square-4")
    s4.onclick = () => Square.Four.playTurn(playerTurn);
var s5 = document.querySelector("#square-5")
    s5.onclick = () => Square.Five.playTurn(playerTurn);  
var s6 = document.querySelector("#square-6")
    s6.onclick = () => Square.Six.playTurn(playerTurn);    
var s7 = document.querySelector("#square-7")
    s7.onclick = () => Square.Seven.playTurn(playerTurn);   
var s8 = document.querySelector("#square-8")
    s8.onclick = () => Square.Eight.playTurn(playerTurn);   
var s9 = document.querySelector("#square-9")
    s9.onclick = () => Square.Nine.playTurn(playerTurn);   
var btnReset = document.querySelector("#reset")
    btnReset.onclick = () => Square.resetBoard();

//Updates tic-tac-toe square divs
function updateDisplay() {
    s1.innerHTML = Square.One.checkStatus();
    s2.innerHTML = Square.Two.checkStatus();
    s3.innerHTML = Square.Three.checkStatus();
    s4.innerHTML = Square.Four.checkStatus();
    s5.innerHTML = Square.Five.checkStatus();
    s6.innerHTML = Square.Six.checkStatus();
    s7.innerHTML = Square.Seven.checkStatus();
    s8.innerHTML = Square.Eight.checkStatus();
    s9.innerHTML = Square.Nine.checkStatus();

    if (playerTurn == "X") {
        document.querySelector(".turn").innerHTML = "Turn: Player Two"
    };
    if (playerTurn == "O") {
        document.querySelector(".turn").innerHTML = "Turn: Player One";
    };
};




/*
Gameboard object has 9 squares
each square has 3 status: x/o/null
    square status is connect to DOM
Gb object has win/lose property
win/lose property determined by correct lines
correct lines can be defined by either player X or player O
squareSix.status(x) => status = x
*/