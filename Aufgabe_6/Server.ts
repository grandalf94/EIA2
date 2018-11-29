import * as Http from "http"; //http Objekt wird erstellt -> interpreter schaut nach jedem möglichen import im http Modul und fügt es dem http Objekt im Code hinzu



namespace L06_SendData { //eigener Namespace für Datei/Aufgaben -gruppe wird bestimmt
    console.log("Starting server"); // Konsole gibt aus "Starting server"
    let port: number = process.env.PORT; 
    /* variable "port" vom typ number wird erstellt -> den Umgebunbungs Variablen wird der PORT zugewiesen
             -> PORT variable wird genutzt um zu sagen auf welchem Port dein Server für das routing(um Ordnungsgemäß zu arbeiten) hören soll.
             -> Die globale process.env Variable wird von der "Node" beim Start der benutzten Applikation indiziert , sie representiert den Zustand der system Umgebung deiner Applikation 
                wenn sie gestartet wird. */
                                                        
    
    
   
    if (port == undefined) // if-Abfrage wird erstellt: wenn port (nummer) undefiniert ist ->
        port = 8100;        // -> wird der Variable port die Zahl = 8100 zugewiesen

    let server: Http.Server = Http.createServer(); 
    /* Variable "server" wird erstellt vom Typ Http Server Objekt welche der Methode Http.createServer(); entspricht
        -> Das HTTP Server Objekt wandelt das Vehalten deines Computers in das eines HTTP Servers.
        -> Ein HTTP Server Objekt kann ports auf deinem Computer abrufen und Funktionen ausführen
        -> Die Http.createServer() Methode wandelt deinen Computer in einen HTTP Server. -> Sie erstellt auch ein HTTP Server Objekt */
   
    server.addListener("request", handleRequest); /* ein "beobachter" wird am Obbjekt server befestigt -> wird jedesmal ausgelöst wenn eine Aufforderung erfolgt
                                                      -> methode = handleRequest wird aufgerufen */
    server.addListener("listening", handleListen); /* ein "beobachter" wird am Obbjekt server befestigt -> wird jedesmal ausgelöst wenn Server nach einer Verbindung sucht
                                                      -> methode = handleListen wird aufgerufen */
    server.listen(port); // HTTP Server startet nach einer Verbindung unter indizierten port zu suchen.

    function handleListen(): void { // Funktion wird erstellt ohne Rückgabewert
        console.log("Listening");       // -> wenn Funktion ausgeführt wird wird auf Konsole "Listening" ausgegeben.
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { 
    /*Funktion (ohne Rückgabewert) wird erstellt mit den Übergabewerten einer Aufforderung wenn eine Nachricht empfangen wird (_request: Http.IncomingMessage), und eine Antwort die vom Server kommt (_response: Http.ServerResponse)..
        -> ein IncomingMessage Objekt wird vom http.Server oder vom http.ClientRequest erstellt, das Objekt besteht als das erst Argument in beziehung zum "request" und "response" Event. 
        -> ein ServerResponse Objekt wird intern vom HTTP Server erstellt nicht vom benutzer. Es durchläuft als der zweite Parameter in beziehung zum "request" Event. */
        
        console.log(_request.url); // Funktion gibt auf Konsole "I hear voices!" aus

        _response.setHeader("content-type", "text/html; charset=utf-8"); // Hier wird ein einzelner header Wert für implizierter Header gesetzt. In Klammern ist (Name ; Wert )     
        _response.setHeader("Access-Control-Allow-Origin", "*"); /* Hier wird ein einzelner header Wert für implizierter Header gesetzt. In Klammern ist (Name ; Wert )
                                                                        -> ist eine response die dem Browser sagt, es dürfen codes von jeder Zugangsquelle, zugang zur Ressourcen bekommen   
                                                                        -> für requests ohne Referenz kann "*" benutzt werden */

        _response.write(_request.url); /* Eine Antwort wird "geschrieben" und zwar die URL des _request Objektes
                                        -> wenn response.write() das erste mal aufgerufen wird, wird die gespeicherte header Information und der erste body zum Client geschickt. */
    
        _response.end(); 
        //  Diese Methode signalisiert dem Server das alle response header und body´s verschickt wurden, dies muss in JEDER response aufgerufen werden.
         
    }
}