//1. INportar el modulo global HTTP
const { log } = require('console');
const http = require('http');

const fs = require('fs');

/* function requestListener(req, res){
    Es mejor pasar con funcion anonima.
} */
// request listener

//2. Crea el servidor web 
// Preferiblemente usar arrow function
const server = http.createServer((req, res)=>{
    const url = req.url
    const method = req.method
/*     console.log(req.url, req.method, req.headers); */
// Cerrar o salir del ciclo continuo de eventos    
/*     process.exit(); */

//Routing
if(url === '/'){
    res.write('<html>')
    res.write('<head><title> My first response page</title></head>');
    res.write('<body><form action="/message" method="post"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>')
    return res.end();
}

if(url === '/message' && method==='POST'){
    fs.writeFileSync('message.txt', 'hello wordl');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
}

//Enviando respuestas
res.setHeader('Content-Type', 'text/html');
res.write('<html>')
res.write('<head><title> My first response page</title></head>');
res.write('<body><h1>Hello world</h1></body>');
res.write('</html>')
res.end();
});

server.listen(5000);

