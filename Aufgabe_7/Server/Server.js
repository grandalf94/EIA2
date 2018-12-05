"use strict";
const Http = require("http");
const Url = require("url");
var L06_SendData;
(function (L06_SendData) {
    console.log("Starting server");
    let port = process.env.PORT;
    if (port == undefined)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        console.log(_request.url);
        let url = Url.parse(_request.url, true).query;
        console.log(url);
        for (let key in url) {
            console.log(url[key]);
            console.log(key);
            _response.write(key + " = " + url[key] + "<br>");
        }
        _response.end();
    }
})(L06_SendData || (L06_SendData = {}));
//# sourceMappingURL=Server.js.map