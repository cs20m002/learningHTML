
// single function exported 
// const mod = require('./mod'); // modu == average
// console.log(mod);


// console.log(mod([3,5]));


// mutliple function exported as object
const mod = require('./mod');
console.log(mod.avg([3,5]));
console.log(mod.name);
console.log(mod.repo);
console.log('This is index.js');


