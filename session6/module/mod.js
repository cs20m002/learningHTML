console.log('this is module.js');

// by default if exported as module its function are not accessable
function average(arr){
    let count = 0;
    let sum = 0;
    arr.forEach(element => {
        sum += element;
        count += 1;
    });
    return sum/count;
}

// we need to explicitly mention

// single export
// module.exports = average;

// multiple export

module.exports = {
    avg : average,
    name : "aniket",
    repo : "github"
}