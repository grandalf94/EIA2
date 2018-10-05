
namespace aufgabe0 {
    var k : string ="";
        
    function main() {
        var k = prompt("Gib deinen Namen ein");
        var node : any = document.getElementById("inhalt");
        node.innerHTML += "Servus ";
        node.innerHTML += k;
        node.innerHTML += ", ich grueﬂe dich!";
        console.log("Servus ",k,", ich grueﬂe dich!");
        }

    
    document.addEventListener('DOMContentLoaded',main);
}