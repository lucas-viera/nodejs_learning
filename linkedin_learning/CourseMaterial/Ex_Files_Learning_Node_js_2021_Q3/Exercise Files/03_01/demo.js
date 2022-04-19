var fs = require('fs')
var data = require('./data.json')

console.log(data.name)  //data read directly from file

fs.readFile('./data.json', 'utf-8', (err,data) => {
    var data = JSON.parse(data) //data read using library and being parsed
    console.log(data.name)
})