"use strict";
const Http = require("http");
const Url = require("url");
var A7;
(function (A7) {
    console.log("Starting server");
    let port = process.env.PORT;
    if (port == undefined)
        port = 8100;
    let HTMLArray = [];
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log(_request.url);
        console.log("request");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url != "/favicon.ico") {
            let url = Url.parse(_request.url).search.substr(1);
            let HTML = "<br>";
            for (let i = 0; i < url.length; i++) {
                if (url[i] == "&") {
                    HTMLArray.push(HTML);
                    HTML = "<br>";
                }
                else {
                    if (HTML == "<br>Text") {
                        HTML = "<br>Adresse";
                    }
                    if (HTML == "<br>Pattern") {
                        HTML = "<br>Hausnummer";
                    }
                    HTML += url[i];
                    console.log(HTML);
                }
            }
            HTMLArray.push(HTML);
            for (let i = 0; i < HTMLArray.length; i++) {
                _response.write(HTMLArray[i]);
            }
            console.log(HTMLArray);
        }
        _response.end();
    }
})(A7 || (A7 = {}));
//# sourceMappingURL=Server.js.map