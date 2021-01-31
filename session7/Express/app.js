const express = require('express');
const app = express();

const port = 3000;
const hostname = '127.0.0.1';

app.get("/",(req,res)=>{
    res.end("<h1>This is my first express app /home </h1>");
});

app.get("/about",(req,res)=>{
    res.status(200).end("<h1>This is my first express app /about GET request</h1>");
});

app.post("/about",(req,res)=>{
    res.end("<h1>This is my first express app /about POST request</h1>");
});

app.get("/this",(req,res)=>{
    res.status(404).end("this is not valid ruter!!");
});

// previously using 
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

app.listen(port,hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});
