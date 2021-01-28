//  First step is to include module

// const fs = require('fs');
// const text = fs.readFileSync("read.txt","utf-8");
// console.log(text);

const fs = require('fs');
let text = fs.readFileSync("read.txt","utf-8");

// content of the file is 
console.log(text);
// content of the file modified
text = text.replace("sample","tutorial");
console.log(text);

// commiting the changes to source file (read.txt)
fs.writeFileSync("read.txt",text);
console.log(text);