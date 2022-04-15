var fs = require ('fs');
var data = require('./data.json')
console.log(data)
console.log(data.name)  //this works ok because it's an object


fs.readFile('./data.json', 'utf-8', (err, data) => {
    console.log(data)
    console.log(data.name)  //this is undefined because it's just a sting
    //we must parse it

    var data2 = JSON.parse(data)
    console.log(data2.name) //nowo this works ok
});