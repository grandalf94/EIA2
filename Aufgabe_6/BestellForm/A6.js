var Aufgabe06;
(function (Aufgabe06) {
    document.addEventListener("DOMContentLoaded", writeHTML);
    document.addEventListener("DOMContentLoaded", init);
    let treePrice = 0;
    let ballPrice = 0;
    let candlePrice = 0;
    let lamettaPrice = 0;
    let holderPrice = 0;
    let shipmentPrice = 0;
    let ort = "";
    let strass = "";
    let nummer = "";
    let postleitzahl = "";
    function writeHTML() {
        let node = document.getElementById("fieldset");
        let childNodeHTML;
        childNodeHTML = "<h3>Baeume</h3>";
        childNodeHTML += "<select name='Select' id='tree'>";
        for (let i = 0; i < Aufgabe06.tree.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe06.tree[i].name + "'>" + Aufgabe06.tree[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Glasskugeln</h3>";
        for (let i = 0; i < Aufgabe06.christmasBall.length; i++) {
            childNodeHTML += Aufgabe06.christmasBall[i].name;
            childNodeHTML += " <input type='number' id='numberBalls" + i + "' name='Stepper' step='1' min='0' max='30' value='0' title='" + Aufgabe06.christmasBall[i].name + "' price='" + Aufgabe06.christmasBall[i].price + "'/>";
            childNodeHTML += "<br>";
            continue;
        }
        //Kerzen
        childNodeHTML += "<h3>Kerzen</h3>";
        for (let i = 0; i < Aufgabe06.candle.length; i++) {
            childNodeHTML += Aufgabe06.candle[i].name;
            childNodeHTML += " <input type='number' id='numberCandles" + i + "' name='Stepper' step='1' min='0' max='30' value='0' title='" + Aufgabe06.candle[i].name + "' price='" + Aufgabe06.candle[i].price + "' />";
            childNodeHTML += "<br>";
            continue;
        }
        childNodeHTML += "<h3>Lametta</h3>";
        for (let i = 0; i < Aufgabe06.lametta.length; i++) {
            childNodeHTML += Aufgabe06.lametta[i].name;
            childNodeHTML += " <input type='number' id='numberLametta" + i + "' name='Stepper' step='1' min='0' max='30' value='0' title='" + Aufgabe06.lametta[i].name + "' price=" + Aufgabe06.lametta[i].price + " />";
            childNodeHTML += "<br>";
            continue;
        }
        childNodeHTML += "<h3>Halterung</h3>";
        childNodeHTML += "<select name='Select' id='holder'>";
        for (let i = 0; i < Aufgabe06.holder.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe06.holder[i].name + "'>" + Aufgabe06.holder[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Lieferant</h3>";
        childNodeHTML += "<select name='Select' id='shipment'>";
        for (let i = 0; i < Aufgabe06.shipment.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe06.shipment[i].name + "'>" + Aufgabe06.shipment[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Adresse</h3>";
        childNodeHTML += "<input id='strasse' type='text' name='Text' placeholder='Strasse' required/>";
        childNodeHTML += "<input id='hausnummer' type='text' name='Text' placeholder='Hausnummer' required/>";
        childNodeHTML += "<br>";
        childNodeHTML += "<input id='plz' type='text' name='Pattern' pattern='[0-9]{5}' placeholder='PLZ' required/>";
        childNodeHTML += "<input id='place' type='text' name='Text' placeholder='Ort' required/>";
        childNodeHTML += "<br>";
        node.innerHTML += childNodeHTML;
    }
    function init(_event) {
        let fieldset = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
        document.getElementById("check").addEventListener("click", checkInputs);
    }
    function handleChange(_event) {
        let target = _event.target;
        console.log(target.id);
        let articles = document.getElementsByTagName("input");
        let node = document.getElementById("deko");
        node.innerHTML = "";
        for (let i = 0; i < articles.length; i++) {
            let article = articles[i];
            let value = parseInt(article.value);
            if (article.name == "Stepper") {
                let node = document.getElementById("deko");
                let DOMValue = target.value;
                target.setAttribute("value", DOMValue);
                let value = parseInt(article.getAttribute("value"));
                let name = article.getAttribute("title");
                let price = article.getAttribute("price");
                let childNodeHTML;
                if (value > 0) {
                    childNodeHTML = "";
                    childNodeHTML += "<a price='" + (Number(price) * value) + "'>";
                    childNodeHTML += " " + value + name + " " + (Number(price) * value) + " Euro";
                    childNodeHTML += "</a>";
                    node.innerHTML += childNodeHTML;
                }
            }
        }
        if (target.id == "tree") {
            let node = document.getElementById("baum");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            let childNodeHTML;
            treePrice = Aufgabe06.tree[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "holder") {
            let node = document.getElementById("halterung");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            let childNodeHTML;
            holderPrice = Aufgabe06.holder[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "shipment") {
            let node = document.getElementById("lieferant");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            let childNodeHTML;
            shipmentPrice = Aufgabe06.shipment[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "strasse") {
            let node = document.getElementById("strass");
            strass = target.value;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "hausnummer") {
            let node = document.getElementById("nummer");
            nummer = target.value;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "plz") {
            let node = document.getElementById("postleitzahl");
            postleitzahl = target.value;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "place") {
            let node = document.getElementById("ort");
            ort = target.value;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        price();
    }
    function price() {
        let checkout = document.getElementById("deko");
        let price = 0;
        console.log(checkout.childNodes);
        for (let i = 0; i < checkout.childNodes.length; i++) {
            let article = checkout.childNodes[i];
            let articlePrice = Number(article.getAttribute("price"));
            price += articlePrice;
            console.log(articlePrice);
        }
        let HTML;
        let node = document.getElementById("preis");
        HTML = " ";
        HTML += (treePrice + holderPrice + shipmentPrice + price);
        HTML += " Euro";
        node.innerHTML = HTML;
    }
    function checkInputs() {
        if (treePrice == 0 || holderPrice == 0 || shipmentPrice == 0 || ort == "" || nummer == "" || postleitzahl == "" || strass == "") {
            document.getElementById("buttonCheck").innerHTML = "Fehlende Angaben!";
        }
        else {
            document.getElementById("buttonCheck").innerHTML = "";
        }
    }
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=A6.js.map