const Square = (() => {
    const Square = () => {
        var status = '';
        
        const checkStatus = () => status;
        const playX = () => status = "x";
        const playO = () => status = "o";
        const playNone = () => status = '';
        return {checkStatus, playX, playO, playNone, checkStatus}
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

var s4 = document.querySelector("#square-4")
s4.innerHTML = `${Square.One.checkStatus()}`








var Player = {

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