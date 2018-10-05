
namespace aufgabe0 {
    var k : string ="";
        
    function main() {
        var i = prompt("Gib deinen Namen ein");
        var node : any = document.getElementById("inhalt");
        node.innerHTML += "Servus ";
        node.innerHTML += k;
        node.innerHTML += ", ich grüße dich!";
        console.log("Servus ",k,", ich grüße dich!");
        }

    
    document.addEventListener('DOMContentLoaded',main);
}