/**-- Aufgabe: Aufgabe 1
Name: Joel Stark
Matrikel: 259546
Datum: 11.11.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.*/
namespace unoA3{

    document.addEventListener("DOMContentLoaded", main);
    document.addEventListener("keydown", pressKeyboard);

    interface Card {
        color: string;
        value: string;
    }


    let colors: string[] = ["red", "blue", "green", "yellow"];
    let values: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "<=>"];
    let cards: Card[] = [{ color: "red", value: "0" }, { color: "blue", value: "0" }, { color: "green", value: "0" }, { color: "yellow", value: "0" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }];
    let cacheCards: Card[] = [];

    for (let i: number = 0; i < colors.length; i++) {
        for (let j: number = 0; j < values.length; j++) {
            for (let k: number = 0; k < 2; k++) {
                let card: Card = { color: colors[i], value: values[j] };
                cards.push(card);
            }
        }
    }
    console.log(cards);

    let handcards: Card[] = [];

    function input(): void {
        let n: string = prompt("Draw your handcards!");
        let countofcards: number = parseInt(n);

        drawCard(countofcards);
        displayHand();

        let button: HTMLElement = document.getElementById("sort");
        button.addEventListener("click", sortHand);

    }

    function pressKeyboard(_event: KeyboardEvent): void {
        if (_event.keyCode == 32) {
            drawOne();
        }
    }

    function drawOne(): void {
        drawCard(1);
        console.log(handcards);
    }

    function drawCard(a: number): void {
        for (let i: number = 0; i < a; i++) {
            let r: number = Math.floor(Math.random() * cards.length);
            handcards.push(cards[r]);
            cards.splice(r, 1);
        }
        displayHand();

    }

    function discardCard(_event: MouseEvent): void {
        document.getElementById("Discardpile").innerHTML = "";
        let clickedCard: HTMLElement = <HTMLElement>_event.target;
        let index: number = parseInt(clickedCard.id);
        cacheCards.push(handcards[index]);
        let div: HTMLElement = document.createElement("div");
        document.getElementById("Discardpile").appendChild(div);
        div.innerHTML = handcards[index].value;
        div.classList.add(handcards[index].color);
        handcards.splice(index, 1);
        displayHand();
    }

    function displayHand(): void {
        document.getElementById("Handcards").innerHTML = "";
        for (let b: number = 0; b < handcards.length; b++) {
            let div: HTMLElement = document.createElement("div");
            document.getElementById("Handcards").appendChild(div);
            div.innerHTML = handcards[b].value;
            let id: string = b.toString();
            div.setAttribute("id", id);
            div.classList.add("Handcards");
            div.classList.add(handcards[b].color);
            div.addEventListener("click", discardCard);

        }

    }

    function main(): void {
        input();
        document.getElementById("Deck").addEventListener("click", drawOne)
    }

    function sortHand(): void {
        console.log(handcards);
        document.getElementById("Handcards").innerHTML = "";
        handcards.sort(function(a: Card, b: Card): number {
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

}