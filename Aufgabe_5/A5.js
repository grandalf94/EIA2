var Aufgabe05;
(function (Aufgabe05) {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("DOMContentLoaded", fillFieldset2);
    document.addEventListener("DOMContentLoaded", changeListener);
    function init(_event) {
        console.log(Aufgabe05.assoProducts);
        displayAssoArray(Aufgabe05.assoProducts);
    }
    ;
    function displayAssoArray(_assoArray) {
        for (let key in _assoArray) {
            let value = _assoArray[key];
            if (key == "treeSpecies" || key == "holder" || key == "shipment") {
                for (let i = 0; i < value.length; i++)
                    fillFieldsetCheck(value[i], i, key);
            }
            if (key != "treeSpecies" && key != "holder" && key != "shipment") {
                for (let i = 0; i < value.length; i++)
                    fillFieldset(value[i], i, key);
            }
        }
    }
    //Change Listener
    function changeListener(_event) {
        let fieldset = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
    }
    let adress = "";
    let checkTree = 0;
    let checkHolder = 0;
    let checkShipping = 0;
    function fillFieldsetCheck(_products, i, key) {
        let node = document.getElementById("fieldset");
        document.getElementById("button").addEventListener("click", checkCheckout);
        let childNodeHTML;
        //Waren
        if (i == 0) {
            childNodeHTML = "<h3>" + _products.typ + "</h3>";
            childNodeHTML += "<hr>";
            childNodeHTML += "<section id='" + key + "'>";
            childNodeHTML += "</section>";
            node.innerHTML += childNodeHTML;
        }
        let radio = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("name", _products.typ);
        radio.setAttribute("value", "0");
        radio.setAttribute("title", _products.name);
        radio.setAttribute("price", _products.price.toFixed());
        radio.setAttribute("item", _products.typ);
        radio.setAttribute("id", _products.name);
        document.getElementById(key).appendChild(radio);
        let radioLabel = document.createElement("label");
        radioLabel.setAttribute("for", _products.name);
        radioLabel.innerText = _products.name + " " + _products.price.toFixed() + " Euro";
        document.getElementById(key).appendChild(radioLabel);
    }
    function fillFieldset(_products, i, key) {
        let node = document.getElementById("fieldset");
        document.getElementById("button").addEventListener("click", checkCheckout);
        let childNodeHTML;
        //Waren
        if (i == 0) {
            childNodeHTML = "<h3>" + _products.typ + "</h3>";
            childNodeHTML += "<hr>";
            childNodeHTML += "<section id='" + key + "'>";
            childNodeHTML += "</section>";
            node.innerHTML += childNodeHTML;
        }
        let option = document.createElement("p");
        option.setAttribute("value", _products.name + " " + _products.price + " Euro");
        option.innerText = _products.name + " " + _products.price + " Euro";
        document.getElementById(key).appendChild(option);
        let steper = document.createElement("input");
        steper.setAttribute("type", "number");
        steper.setAttribute("name", " Stepper");
        steper.setAttribute("step", "1");
        steper.setAttribute("min", "0");
        steper.setAttribute("max", "50");
        steper.setAttribute("value", "0");
        steper.setAttribute("item", _products.typ);
        steper.setAttribute("title", _products.name);
        steper.setAttribute("price", _products.price.toFixed());
        document.getElementById(key).appendChild(steper);
    }
    //Adresse
    function fillFieldset2() {
        document.getElementById("button").addEventListener("click", checkCheckout);
        let fieldset = document.getElementById("fieldset2");
        fieldset.addEventListener("change", handleChange);
        let input = document.createElement("input");
        input.setAttribute("id", "ad");
        document.getElementById("fieldset2").appendChild(input);
    }
    function handleChange(_event) {
        let target = _event.target;
        let articles = document.getElementsByTagName("input");
        let div = document.getElementById("div");
        let section = document.getElementById("selectedArticle");
        section.innerHTML = "";
        for (let i = 0; i < articles.length - 1; i++) {
            let article = articles[i];
            let section = document.getElementById("selectedArticle");
            let p = document.createElement("p");
            let articleTyp = article.getAttribute("item");
            let articleName = article.getAttribute("title");
            let articlePrice = parseInt(article.getAttribute("price"));
            if (article.type == "radio") {
                if (article.checked == true) {
                    article.setAttribute("value", "1");
                    if (target.name == "Baum") {
                        checkTree = 1;
                    }
                    if (target.name == "Halterung") {
                        checkHolder = 1;
                    }
                    if (target.name == "Lieferoptionen") {
                        checkShipping = 1;
                    }
                }
                else if (article.checked == false) {
                    article.setAttribute("value", "0");
                }
            }
            let domAmount = target.value;
            target.setAttribute("value", domAmount);
            let articleAmount = parseInt(article.getAttribute("value"));
            let price = articlePrice * articleAmount;
            p.setAttribute("price", price.toString());
            if (articleAmount > 0) {
                p.innerText += articleTyp + ": " + articleAmount + " " + articleName + " " + price + " Euro";
            }
            section.appendChild(p);
        }
        if (target.id == "ad") {
            let adresse = document.createElement("p");
            adresse.setAttribute("id", "adress");
            adresse.innerText = "Adresse: " + target.value;
            adress = target.value;
            div.appendChild(adresse);
        }
        calcPrice();
    }
    function calcPrice() {
        let checkout = document.getElementById("selectedArticle");
        let price = 0;
        console.log(checkout.childNodes);
        for (let i = 0; i < checkout.childNodes.length; i++) {
            let article = checkout.childNodes[i];
            let articlePrice = Number(article.getAttribute("price"));
            console.log(articlePrice);
            price += articlePrice;
            let showPrice = document.createElement("div");
            showPrice.setAttribute("id", "box");
            document.getElementById("div").appendChild(showPrice);
            showPrice.innerText = "Gesamtpreis: " + price.toString() + " Euro";
        }
    }
    function checkCheckout(_event) {
        if (adress == "" || checkTree == 0 || checkHolder == 0 || checkShipping == 0) {
            document.getElementById("missing").innerHTML = "fehlende Angaben";
        }
        else {
            document.getElementById("missing").innerHTML = "";
        }
    }
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=A5.js.map