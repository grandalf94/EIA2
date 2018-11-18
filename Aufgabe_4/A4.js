var Aufgabe04;
(function (Aufgabe04) {
    document.addEventListener("DOMContentLoaded", fillFieldset);
    document.addEventListener("DOMContentLoaded", changeListener);
    function changeListener(_event) {
        let fieldset = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
    }
    let priceTree = 0;
    let priceHolder = 0;
    let priceBalls = 0;
    let priceLametta = 0;
    let priceCandle = 0;
    let priceShipping = 0;
    let numberOfBalls = 0;
    let numberOfLametta = 0;
    let numberOfCandle = 0;
    let adress = "";
    function fillFieldset() {
        console.log("");
        let node = document.getElementById("fieldset");
        document.getElementById("button").addEventListener("click", checkCheckout);
        let childNodeHTML;
        //Baumart
        childNodeHTML = "<h3>Baumart</h3>";
        for (let i = 0; i < Aufgabe04.treeSpecies.length; i++) {
            childNodeHTML += "<input type='radio' name='Radiogrouptree' value='" + i + Aufgabe04.treeSpecies[i].name + " " + Aufgabe04.treeSpecies[i].price + " Euro'  id='radio" + i + "' />";
            childNodeHTML += "<label for='check" + i + "'>" + Aufgabe04.treeSpecies[i].name + " " + Aufgabe04.treeSpecies[i].price + " Euro</label>";
        }
        childNodeHTML += "<hr>";
        //Halterung
        childNodeHTML += "<h3>Halterung</h3>";
        childNodeHTML += "<select name='Select' id='holderType'>";
        for (let i = 0; i < Aufgabe04.holderType.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe04.holderType[i].name + " " + Aufgabe04.holderType[i].price + " Euro'>" + Aufgabe04.holderType[i].name + " " + Aufgabe04.holderType[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<hr>";
        //Kugeln
        childNodeHTML += "<h3>Kugeln</h3>";
        childNodeHTML += "<select name='Select' id='christmasBall'>";
        for (let i = 0; i < Aufgabe04.christmasBall.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe04.christmasBall[i].name + " " + Aufgabe04.christmasBall[i].price + " Euro'>" + Aufgabe04.christmasBall[i].name + " " + Aufgabe04.christmasBall[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Anzahl in Stueck</h3>";
        childNodeHTML += "<select name='Select' id='Amount1'>";
        for (let i = 0; i < 18; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        //Lametta
        childNodeHTML += "<h3>Lametta</h3>";
        childNodeHTML += "<select name='Select' id='tinsels'>";
        for (let i = 0; i < Aufgabe04.lametta.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe04.lametta[i].name + " " + Aufgabe04.lametta[i].price + " Euro'>" + Aufgabe04.lametta[i].name + " " + Aufgabe04.lametta[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Laenge in Meter</h3>";
        childNodeHTML += "<select name='Select' id='Amount2'>";
        for (let i = 0; i < 6; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        //Kerzen
        childNodeHTML += "<h3>Kerzen</h3>";
        childNodeHTML += "<select name='Select' id='candles'>";
        for (let i = 0; i < Aufgabe04.candleType.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe04.candleType[i].name + " " + Aufgabe04.candleType[i].price + " Euro'>" + Aufgabe04.candleType[i].name + " " + Aufgabe04.candleType[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Anzahl in Stueck</h3>";
        childNodeHTML += "<select name='Select' id='Amount3'>";
        for (let i = 0; i < 21; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        //Lieferoptionen
        childNodeHTML += "<h3>Lieferoptionen</h3>";
        for (let i = 0; i < Aufgabe04.shipment.length; i++) {
            childNodeHTML += "<input type='radio' name='Radiogroupshipment' value='" + i + Aufgabe04.shipment[i].name + " " + Aufgabe04.shipment[i].price + " Euro'  id='radio" + i + "' />";
            childNodeHTML += "<label for='check" + i + "'>" + Aufgabe04.shipment[i].name + " " + Aufgabe04.shipment[i].price + " Euro</label>";
        }
        childNodeHTML += "<br>";
        //Adresse
        childNodeHTML += "<h3>Adresse</h3>";
        childNodeHTML += "<input id='ad' type='text' name='Text' placeholder='enter adress here' required/>";
        node.innerHTML += childNodeHTML;
    }
    function handleChange(_event) {
        let target = _event.target;
        //B�ume radio
        if (target.name == "Radiogrouptree") {
            let node = document.getElementById("tree");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceTree = Aufgabe04.treeSpecies[priceIndex].price;
            console.log(priceTree);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Halterung dropdown
        if (target.id == "holderType") {
            let node = document.getElementById("holder");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceHolder = Aufgabe04.holderType[priceIndex].price;
            console.log(priceHolder);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Balls dropdown
        if (target.id == "christmasBall") {
            let node = document.getElementById("ball");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceBalls = Aufgabe04.christmasBall[priceIndex].price;
            console.log(priceBalls);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "Amount1") {
            let node = document.getElementById("ballAmount");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            numberOfBalls = numIndex;
            console.log(numberOfBalls);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Lametta dropdown
        if (target.id == "tinsels") {
            let node = document.getElementById("tinsel");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceLametta = Aufgabe04.lametta[priceIndex].price;
            console.log(priceLametta);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "Amount2") {
            let node = document.getElementById("tinselAmount");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            numberOfLametta = numIndex;
            console.log(numberOfLametta);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Kerzen dropdown
        if (target.id == "candles") {
            let node = document.getElementById("candle");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceCandle = Aufgabe04.candleType[priceIndex].price;
            console.log(priceCandle);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "Amount3") {
            let node = document.getElementById("candleAmount");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            numberOfCandle = numIndex;
            console.log(numberOfCandle);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Lieferoption radio 
        if (target.name == "Radiogroupshipment") {
            let node = document.getElementById("shipping");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceShipping = Aufgabe04.shipment[priceIndex].price;
            console.log(priceTree);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Adresse input
        if (target.id == "ad") {
            let node = document.getElementById("adress");
            adress = target.value;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        let node = document.getElementById("price");
        let childNodeHTML;
        childNodeHTML = "";
        childNodeHTML += "<a>";
        childNodeHTML += (priceTree + priceHolder + (priceBalls * numberOfBalls) + (priceLametta * numberOfLametta) + (priceCandle * numberOfCandle) + priceShipping);
        childNodeHTML += " Euro";
        childNodeHTML += "</a>";
        node.innerHTML = childNodeHTML;
    }
    function checkCheckout(_event) {
        if (adress == "" || priceTree == 0 || priceHolder == 0 || priceBalls == 0 || priceLametta == 0 || priceCandle == 0 || priceShipping == 0 || numberOfBalls == 0 || numberOfLametta == 0 || numberOfCandle == 0) {
            document.getElementById("missing").innerHTML = "fehlende Angaben";
        }
        else {
            document.getElementById("missing").innerHTML = "";
        }
    }
})(Aufgabe04 || (Aufgabe04 = {}));
//# sourceMappingURL=A4.js.map