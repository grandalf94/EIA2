var aufgabe0;
(function (aufgabe0) {
    var k = "";
    function main() {
        var i = prompt("Gib deinen Namen ein");
        var node = document.getElementById("inhalt");
        node.innerHTML += "Servus ";
        node.innerHTML += k;
        node.innerHTML += ", ich gr��e dich!";
        console.log("Servus ", k, ", ich gr��e dich!");
    }
    document.addEventListener('DOMContentLoaded', main);
})(aufgabe0 || (aufgabe0 = {}));
//# sourceMappingURL=aufgabe0script.js.map