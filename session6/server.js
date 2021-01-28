const http = require('http');
const fs = require('fs');

const data = fs.readFileSync('/home/aniket/Web Dev/session3/index.html');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(data);
});

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});