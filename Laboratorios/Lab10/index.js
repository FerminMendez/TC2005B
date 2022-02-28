
const fs= require('fs');
console.log("Llamando server.js");

const http = require('http');


const server = http.createServer((request,response)=>{
    response.setHeader('Content-Type','text/html');
    response.writeHeader(200, {"Content-Type": "text/html"});  
    response.write();  
    response.end();  

})


fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(4000);
});
