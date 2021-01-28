// synchronous or blocking (line by line execution)

// asynchronous or non-blocking (line by line execution not guaranteed) --> call back fire

const fs = require('fs');

// example of asynchronous readFile
fs.readFile('read.txt','utf-8',(err,data)=>{
    console.log('error : ', err);
    console.log('data : ', data);
});

console.log("this is a debug message");