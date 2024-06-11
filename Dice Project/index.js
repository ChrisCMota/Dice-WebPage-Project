
function generateRandomNumer () {
    var rollDice = Math.floor((Math.random() * 6) + 1);
    return rollDice;
}


function checkWin() {
        if (firstDice > secondDice) {
        document.querySelector("h2").innerHTML = "First Player Won";
    }else if (secondDice > firstDice) {
        document.querySelector("h2").innerHTML = "Second Player Won";
    }else {
        document.querySelector("h2").innerHTML = "Draw!";
    }
}

var firstDice = generateRandomNumer();
var secondDice = generateRandomNumer();

var firstDiceImg = "./images/dice" + firstDice + ".png";
var secondDiceImg = "./images/dice" + secondDice + ".png";

var setImg1Element = document.querySelectorAll("img")[0].setAttribute("src", firstDiceImg);
var setImg2Element = document.querySelectorAll("img")[1].setAttribute("src", secondDiceImg);



checkWin();