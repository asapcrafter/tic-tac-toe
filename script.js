var playerTurn = 'x'

const Square = (() => {
    const Square = () => {
        var status = '';
        
        const checkStatus = () => status;
        
        const playTurn = (playerTurn) => {
            // if (status !== '') return;
            if (playerTurn == 'x') status = "X";
            if (playerTurn == 'o') status = "O";
            updateDisplay();
            changeTurn();
        };

        // const playX = () => status = "X";
        // const playO = () => status = "O";
        const playNone = () => status = '';

        const changeTurn = () => {
            playerTurn == 'x' ? playerTurn = 'o' : playerTurn = 'x';
        };
        return {checkStatus, checkStatus, playTurn}
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
    return{One, Two, Three, Four, Five, Six, Seven, Eight, Nine};
})();

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
};


var Player = (team) => {
    const playTeam = team => {
        if (team == 'x') {playX()};
        if (team == 'o') {playO()};
    }
    return {playTeam}
}

const playerOne = Player('x')
playerOne.playTeam()

/*
Gameboard object has 9 squares
each square has 3 status: x/o/null
    square status is connect to DOM
Gb object has win/lose property
win/lose property determined by correct lines
correct lines can be defined by either player X or player O
squareSix.status(x) => status = x
*/