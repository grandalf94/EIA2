"use strict";
const Http = require("http"); //http Objekt wird erstellt -> interpreter schaut nach jedem m�glichen import im http Modul und f�gt es dem http Objekt im Code hinzu
var L06_SendData;
(function (L06_SendData) {
    console.log("Starting server"); // Konsole gibt aus "Starting server"
    let port = process.env.PORT;
    /* variable "port" vom typ number wird erstellt -> den Umgebunbungs Variablen wird der PORT zugewiesen
             -> PORT variable wird genutzt um zu sagen auf welchem Port dein Server f�r das routing(um Ordnungsgem�� zu arbeiten) h�ren soll.
             -> Die globale process.env Variable wird von der "Node" beim Start der benutzten Applikation indiziert , sie representiert den Zustand der system Umgebung deiner Applikation
                wenn sie gestartet wird. */
    if (port == undefined)
        port = 8100; // -> wird der Variable port die Zahl = 8100 zugewiesen
    let server = Http.createServer();
    /* Variable "server" wird erstellt vom Typ Http Server Objekt welche der Methode Http.createServer(); entspricht
        -> Das HTTP Server Objekt wandelt das Vehalten deines Computers in das eines HTTP Servers.
        -> Ein HTTP Server Objekt kann ports auf deinem Computer abrufen und Funktionen ausf�hren
        -> Die Http.createServer() Methode wandelt deinen Computer in einen HTTP Server. -> Sie erstellt auch ein HTTP Server Objekt */
    server.addListener("request", handleRequest); /* ein "beobachter" wird am Obbjekt server befestigt -> wird jedesmal ausgel�st wenn eine Aufforderung erfolgt
                                                      -> methode = handleRequest wird aufgerufen */
    server.addListener("listening", handleListen); /* ein "beobachter" wird am Obbjekt server befestigt -> wird jedesmal ausgel�st wenn Server nach einer Verbindung sucht
                                                      -> methode = handleListen wird aufgerufen */
    server.listen(port); // HTTP Server startet nach einer Verbindung unter indizierten port zu suchen.
    function handleListen() {
        console.log("Listening"); // -> wenn Funktion ausgef�hrt wird wird auf Konsole "Listening" ausgegeben.
    }
    function handleRequest(_request, _response) {
        /*Funktion (ohne R�ckgabewert) wird erstellt mit den �bergabewerten einer Aufforderung wenn eine Nachricht empfangen wird (_request: Http.IncomingMessage), und eine Antwort die vom Server kommt (_response: Http.ServerResponse)..
            -> ein IncomingMessage Objekt wird vom http.Server oder vom http.ClientRequest erstellt, das Objekt besteht als das erst Argument in beziehung zum "request" und "response" Event.
            -> ein ServerResponse Objekt wird intern vom HTTP Server erstellt nicht vom benutzer. Es durchl�uft als der zweite Parameter in beziehung zum "request" Event. */
        console.log(_request.url); // Funktion gibt auf Konsole "I hear voices!" aus
        _response.setHeader("content-type", "text/html; charset=utf-8"); // Hier wird ein einzelner header Wert f�r implizierter Header gesetzt. In Klammern ist (Name ; Wert )     
        _response.setHeader("Access-Control-Allow-Origin", "*"); /* Hier wird ein einzelner header Wert f�r implizierter Header gesetzt. In Klammern ist (Name ; Wert )
                                                                        -> ist eine response die dem Browser sagt, es d�rfen codes von jeder Zugangsquelle, zugang zur Ressourcen bekommen
                                                                        -> f�r requests ohne Referenz kann "*" benutzt werden */
        _response.write(_request.url); /* Eine Antwort wird "geschrieben" und zwar die URL des _request Objektes
                                        -> wenn response.write() das erste mal aufgerufen wird, wird die gespeicherte header Information und der erste body zum Client geschickt. */
        _response.end();
        //  Diese Methode signalisiert dem Server das alle response header und body�s verschickt wurden, dies muss in JEDER response aufgerufen werden.
    }
})(L06_SendData || (L06_SendData = {}));
//# sourceMappingURL=Server.js.map