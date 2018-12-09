namespace Aufgabe07 {

document.addEventListener("DOMContentLoaded", writeHTML);
    document.addEventListener("DOMContentLoaded", init);

   let address: string = "https://herokueia2.herokuapp.com/";
    let treePrice: number = 0;
    let ballPrice: number = 0;
    let candlePrice: number = 0;
    let lamettaPrice: number = 0;
    let holderPrice: number = 0;
    let shipmentPrice: number = 0;
    let ort: string = "";
    let strass: string = "";
    let nummer: string = "";
    let postleitzahl: string = "";


    function writeHTML() {

        let node: HTMLElement = document.getElementById("fieldset");
        let childNodeHTML: string;

        childNodeHTML = "<h3>Baeume</h3>";
        childNodeHTML += "<select name='Baum' id='tree'>";
        for (let i: number = 0; i < tree.length; i++) {
            childNodeHTML += "<option value='" + i + tree[i].name + "'>" + tree[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "<h3>Glasskugeln</h3>";

        for (let i: number = 0; i < christmasBall.length; i++) {
            childNodeHTML += christmasBall[i].name;
            childNodeHTML += " <input type='number' id='numberBalls" + i + "' name='Glasskugeln' step='1' min='0' max='30' value='0' title='" + christmasBall[i].name + "' price='" + christmasBall[i].price + "'/>";
            childNodeHTML += "<br>";
            continue
        }
        //Kerzen
        childNodeHTML += "<h3>Kerzen</h3>";
        for (let i: number = 0; i < candle.length; i++) {
            childNodeHTML += candle[i].name;
            childNodeHTML += " <input type='number' id='numberCandles" + i + "' name='Kerzen' step='1' min='0' max='30' value='0' title='" + candle[i].name + "' price='" + candle[i].price + "' />";
            childNodeHTML += "<br>";
            continue
        }
        childNodeHTML += "<h3>Lametta</h3>";
        for (let i: number = 0; i < lametta.length; i++) {
            childNodeHTML += lametta[i].name;
            childNodeHTML += " <input type='number' id='numberLametta" + i + "' name='Lametta' step='1' min='0' max='30' value='0' title='" + lametta[i].name + "' price=" + lametta[i].price + " />"; childNodeHTML += "<br>";
            continue
        }
        childNodeHTML += "<h3>Halterung</h3>";
        childNodeHTML += "<select name='Halterung' id='holder'>";
        for (let i: number = 0; i < holder.length; i++) {
            childNodeHTML += "<option value='" + i + holder[i].name + "'>" + holder[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "<h3>Lieferant</h3>";
        childNodeHTML += "<select name='Lieferant' id='shipment'>";
        for (let i: number = 0; i < shipment.length; i++) {
            childNodeHTML += "<option value='" + i + shipment[i].name + "'>" + shipment[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
 
        childNodeHTML += "<h3>Adresse</h3>";
        childNodeHTML += "<input id='strasse' type='text' name='Strasse' placeholder='Strasse' required/>"
        childNodeHTML += "<input id='hausnummer' type='text' name='Hausnummer' placeholder='Hausnummer' required/>"
        childNodeHTML += "<br>";
        childNodeHTML += "<input id='plz' type='text' name='Postleitzahl' pattern='[0-9]{5}' placeholder='PLZ' required/>"
        childNodeHTML += "<input id='place' type='text' name='Ort' placeholder='Ort' required/>"
        childNodeHTML += "<br>";
        node.innerHTML += childNodeHTML
    } 

    function init(_event: Event) {
        let fieldset: HTMLElement = document.getElementById("fieldset")
        fieldset.addEventListener("change", handleChange);
        document.getElementById("lul").addEventListener("click", sendRequestWithCustomData);
        document.getElementById("check").addEventListener("click", checkInputs);
    }

    function handleChange(_event: Event) {

        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log(target.id);
        let articles: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input")
        let node: HTMLElement = document.getElementById("deko");
        node.innerHTML = "";

        for (let i: number = 0; i < articles.length; i++) {
            let article: HTMLInputElement = articles[i];
            let value: number = parseInt(article.value)
            if (article.name == "Lametta" || article.name == "Kerzen" || article.name == "Glasskugeln") {
                let node: HTMLElement = document.getElementById("deko");
                let DOMValue: string = target.value;
                target.setAttribute("value", DOMValue)
                let value: number = parseInt(article.getAttribute("value"))
                let name: string = article.getAttribute("title");
                let price: string = article.getAttribute("price");
                let childNodeHTML: string;
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
            let node: HTMLElement = document.getElementById("baum");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            let childNodeHTML: string;
            treePrice = tree[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a name=" + target.name + " value=" + value.substr(1) + ">";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }

        if (target.id == "holder") {
            let node: HTMLElement = document.getElementById("halterung");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            let childNodeHTML: string;
            holderPrice = holder[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a name=" + target.name + " value=" + value.substr(1) + ">";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "shipment") {
            let node: HTMLElement = document.getElementById("lieferant");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            let childNodeHTML: string;
            shipmentPrice = shipment[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a name=" + target.name + " value=" + value.substr(1) + ">";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }

        if (target.id == "strasse") {
            let node: HTMLElement = document.getElementById("strass");
            let strass = target.value;
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a name=" + target.name + " value=" + strass+ ">";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }

        if (target.id == "hausnummer") {
            let node: HTMLElement = document.getElementById("nummer");
            let nummer = target.value;
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a name=" + target.name + " value=" + nummer+ ">";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }

        if (target.id == "plz") {
            let node: HTMLElement = document.getElementById("postleitzahl");
            let postleitzahl = target.value;
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a name=" + target.name + " value=" + postleitzahl+ ">";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;

        }

        if (target.id == "place") {
            let node: HTMLElement = document.getElementById("ort");
            let ort = target.value;
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a name=" + target.name + " value=" + ort+ ">";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;

        }
        price()
    }

    function price() {
        let checkout: HTMLElement = document.getElementById("deko");
        let price: number = 0;
        console.log(checkout.childNodes);
        for (let i: number = 0; i < checkout.childNodes.length; i++) {
            let article: any = checkout.childNodes[i];
            let articlePrice: number = Number(article.getAttribute("price"));
            price += articlePrice;
            console.log(articlePrice);
        }
        let HTML: string;
        let node: HTMLElement = document.getElementById("preis");
        HTML = " ";
        HTML += (treePrice + holderPrice + shipmentPrice + price);
        HTML += " Euro";
        node.innerHTML = HTML
    }
    function checkInputs() {
        if (treePrice == 0 || holderPrice == 0 || shipmentPrice == 0 || ort == "" || nummer == "" || postleitzahl == "" || strass == "")
        { document.getElementById("buttonCheck").innerHTML = "Fehlende Angaben!"; }
        else {
            document.getElementById("buttonCheck").innerHTML = "";
        }
    }
    function sendRequestWithCustomData(): void {
        let num: number = document.getElementsByClassName("checkout").length;
        let HTMLString: string = "";
        for (let i: number = 0; i < num; i++) {

            let article: HTMLElement = <HTMLElement>document.getElementsByClassName("checkout")[i];
            if (article.childElementCount > 0) {
                for (let i: number = 0; i < article.childElementCount; i++) {
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
        
        let node: HTMLElement = document.getElementById("ausgabe");
        let childNodeHTML: string;
        childNodeHTML = "";
        childNodeHTML += HTMLString
        node.innerHTML += childNodeHTML;

        let xhr: XMLHttpRequest = new XMLHttpRequest();


        xhr.open("GET", address + "?" + HTMLString, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }

    function handleStateChange(_event: ProgressEvent): void {
        var xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        }
    }
}