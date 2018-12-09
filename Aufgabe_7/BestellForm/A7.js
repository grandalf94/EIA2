var Aufgabe07;
(function (Aufgabe07) {
    document.addEventListener("DOMContentLoaded", writeHTML);
    document.addEventListener("DOMContentLoaded", init);
    let address = "https://herokueia2.herokuapp.com/";
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
        childNodeHTML += "<select name='Baum' id='tree'>";
        for (let i = 0; i < Aufgabe07.tree.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe07.tree[i].name + "'>" + Aufgabe07.tree[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Glasskugeln</h3>";
        for (let i = 0; i < Aufgabe07.christmasBall.length; i++) {
            childNodeHTML += Aufgabe07.christmasBall[i].name;
            childNodeHTML += " <input type='number' id='numberBalls" + i + "' name='Glasskugeln' step='1' min='0' max='30' value='0' title='" + Aufgabe07.christmasBall[i].name + "' price='" + Aufgabe07.christmasBall[i].price + "'/>";
            childNodeHTML += "<br>";
            continue;
        }
        //Kerzen
        childNodeHTML += "<h3>Kerzen</h3>";
        for (let i = 0; i < Aufgabe07.candle.length; i++) {
            childNodeHTML += Aufgabe07.candle[i].name;
            childNodeHTML += " <input type='number' id='numberCandles" + i + "' name='Kerzen' step='1' min='0' max='30' value='0' title='" + Aufgabe07.candle[i].name + "' price='" + Aufgabe07.candle[i].price + "' />";
            childNodeHTML += "<br>";
            continue;
        }
        childNodeHTML += "<h3>Lametta</h3>";
        for (let i = 0; i < Aufgabe07.lametta.length; i++) {
            childNodeHTML += Aufgabe07.lametta[i].name;
            childNodeHTML += " <input type='number' id='numberLametta" + i + "' name='Lametta' step='1' min='0' max='30' value='0' title='" + Aufgabe07.lametta[i].name + "' price=" + Aufgabe07.lametta[i].price + " />";
            childNodeHTML += "<br>";
            continue;
        }
        childNodeHTML += "<h3>Halterung</h3>";
        childNodeHTML += "<select name='Halterung' id='holder'>";
        for (let i = 0; i < Aufgabe07.holder.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe07.holder[i].name + "'>" + Aufgabe07.holder[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Lieferant</h3>";
        childNodeHTML += "<select name='Lieferant' id='shipment'>";
        for (let i = 0; i < Aufgabe07.shipment.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe07.shipment[i].name + "'>" + Aufgabe07.shipment[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Adresse</h3>";
        childNodeHTML += "<input id='strasse' type='text' name='Strasse' placeholder='Strasse' required/>";
        childNodeHTML += "<input id='hausnummer' type='text' name='Hausnummer' placeholder='Hausnummer' required/>";
        childNodeHTML += "<br>";
        childNodeHTML += "<input id='plz' type='text' name='Postleitzahl' pattern='[0-9]{5}' placeholder='PLZ' required/>";
        childNodeHTML += "<input id='place' type='text' name='Ort' placeholder='Ort' required/>";
        childNodeHTML += "<br>";
        node.innerHTML += childNodeHTML;
    }
    function init(_event) {
        let fieldset = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
        document.getElementById("lul").addEventListener("click", sendRequestWithCustomData);
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
            if (article.name == "Lametta" || article.name == "Kerzen" || article.name == "Glasskugeln") {
                let node = document.getElementById("deko");
                let DOMValue = target.value;
                target.setAttribute("value", DOMValue);
                let value = parseInt(article.getAttribute("value"));
                let name = article.getAttribute("title");
                let price = article.getAttribute("price");
                let childNodeHTML;
                if (value > 0) {
                    childNodeHTML = "";
                    childNodeHTML += "<a name=" + name + " value=" + value + " price=" + (Number(price) * value) + " hiddenName=" + name + ">";
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
            treePrice = Aufgabe07.tree[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a name=" + target.name + " value=" + value.substr(1) + ">";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "holder") {
            let node = document.getElementById("halterung");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            let childNodeHTML;
            holderPrice = Aufgabe07.holder[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a name=" + target.name + " value=" + value.substr(1) + ">";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "shipment") {
            let node = document.getElementById("lieferant");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            let childNodeHTML;
            shipmentPrice = Aufgabe07.shipment[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a name=" + target.name + " value=" + value.substr(1) + ">";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "strasse") {
            let node = document.getElementById("strass");
            let strass = target.value;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a name=" + target.name + " value=" + strass + ">";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "hausnummer") {
            let node = document.getElementById("nummer");
            let nummer = target.value;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a name=" + target.name + " value=" + nummer + ">";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "plz") {
            let node = document.getElementById("postleitzahl");
            let postleitzahl = target.value;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a name=" + target.name + " value=" + postleitzahl + ">";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "place") {
            let node = document.getElementById("ort");
            let ort = target.value;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a name=" + target.name + " value=" + ort + ">";
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
    function sendRequestWithCustomData() {
        let num = document.getElementsByClassName("checkout").length;
        let HTMLString = "";
        for (let i = 0; i < num; i++) {
            let article = document.getElementsByClassName("checkout")[i];
            if (article.childElementCount > 0) {
                for (let i = 0; i < article.childElementCount; i++) {
                    HTMLString += article.children[i].getAttribute("name") + ":";
                    if (article.children[i].getAttribute("name") == "Glasskugeln" || article.children[i].getAttribute("name") == "Kerzen" || article.children[i].getAttribute("name") == "Lametta") {
                        HTMLString += article.children[i].getAttribute("hiddenName");
                        console.log(article.children[i].getAttribute("hiddenNamen"));
                    }
                    HTMLString += article.children[i].getAttribute("value");
                    HTMLString += "<br>";
                }
            }
            else {
                continue;
            }
        }
        console.log("HTMLString:" + HTMLString);
        let node = document.getElementById("ausgabe");
        let childNodeHTML;
        childNodeHTML = "";
        childNodeHTML += HTMLString;
        node.innerHTML += childNodeHTML;
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?" + HTMLString, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        }
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=A7.js.map