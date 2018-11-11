/**-- Aufgabe: Aufgabe 1
Name: Joel Stark
Matrikel: 259546
Datum: 11.11.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.*/
var unoA3;
(function (unoA3) {
    document.addEventListener("DOMContentLoaded", main);
    document.addEventListener("keydown", pressKeyboard);
    let colors = ["red", "blue", "green", "yellow"];
    let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "<=>"];
    let cards = [{ color: "red", value: "0" }, { color: "blue", value: "0" }, { color: "green", value: "0" }, { color: "yellow", value: "0" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }];
    let cacheCards = [];
    for (let i = 0; i < colors.length; i++) {
        for (let j = 0; j < values.length; j++) {
            for (let k = 0; k < 2; k++) {
                let card = { color: colors[i], value: values[j] };
                cards.push(card);
            }
        }
    }
    console.log(cards);
    let handcards = [];
    function input() {
        let n = prompt("Draw your handcards!");
        let countofcards = parseInt(n);
        drawCard(countofcards);
        displayHand();
        let button = document.getElementById("sort");
        button.addEventListener("click", sortHand);
    }
    function pressKeyboard(_event) {
        if (_event.keyCode == 32) {
            drawOne();
        }
    }
    function drawOne() {
        drawCard(1);
        console.log(handcards);
    }
    function drawCard(a) {
        for (let i = 0; i < a; i++) {
            let r = Math.floor(Math.random() * cards.length);
            handcards.push(cards[r]);
            cards.splice(r, 1);
        }
        displayHand();
    }
    function discardCard(_event) {
        document.getElementById("Discardpile").innerHTML = "";
        let clickedCard = _event.target;
        let index = parseInt(clickedCard.id);
        cacheCards.push(handcards[index]);
        let div = document.createElement("div");
        document.getElementById("Discardpile").appendChild(div);
        div.innerHTML = handcards[index].value;
        div.classList.add(handcards[index].color);
        handcards.splice(index, 1);
        displayHand();
    }
    function displayHand() {
        document.getElementById("Handcards").innerHTML = "";
        for (let b = 0; b < handcards.length; b++) {
            let div = document.createElement("div");
            document.getElementById("Handcards").appendChild(div);
            div.innerHTML = handcards[b].value;
            let id = b.toString();
            div.setAttribute("id", id);
            div.classList.add("Handcards");
            div.classList.add(handcards[b].color);
            div.addEventListener("click", discardCard);
        }
    }
    function main() {
        input();
        document.getElementById("Deck").addEventListener("click", drawOne);
    }
    function sortHand() {
        console.log(handcards);
        document.getElementById("Handcards").innerHTML = "";
        handcards.sort(function (a, b) {
            if (a.color > b.color) {
                return 1;
            }
            if (a.color < b.color) {
                return -1;
            }
            if (a.value > b.value) {
                return 1;
            }
            if (a.value < b.value) {
                return -1;
            }
            return 0;
        });
        console.log(handcards);
        displayHand();
    }
})(unoA3 || (unoA3 = {}));
//# sourceMappingURL=unoA3.js.map