import * as Http from "http"; 
import * as Url from "url";

namespace A7 {
    console.log("Starting server");
    let port: number = process.env.PORT; 
    if (port == undefined)
        port = 8100;
    
    
    let HTMLArray: string[] = [];
    
    let server: Http.Server = Http.createServer(); 
    server.addListener("request", handleRequest); 
    server.addListener("listening", handleListen); 
    server.listen(port); 

    function handleListen(): void {
        console.log("Listening");
    }
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { 
        console.log(_request.url); 
        console.log("request");
        
        _response.setHeader("content-type", "text/html; charset=utf-8"); 
        _response.setHeader("Access-Control-Allow-Origin", "*"); 
        if (_request.url != "/favicon.ico") {
            let url: string = Url.parse(_request.url).search.substr(1);
            let HTML: string = "<br>";
            for (let i: number = 0; i < url.length; i++) {
                if (url[i] == "&") {
                    HTMLArray.push(HTML);
                    HTML = "<br>";
                }
                else {
                    if (HTML == "<br>Text") {
                        HTML = "<br>Adresse"
                        }
                    if (HTML == "<br>Pattern") {
                        HTML = "<br>Hausnummer"
                        }
                    HTML += url[i];
                    console.log(HTML);
                }
                
                
            }
            HTMLArray.push(HTML);
            
            for (let i: number = 0 ; i < HTMLArray.length ; i++) {
                _response.write(HTMLArray[i]);
                }
            console.log(HTMLArray);
          
        }

        _response.end(); 
    } 
}