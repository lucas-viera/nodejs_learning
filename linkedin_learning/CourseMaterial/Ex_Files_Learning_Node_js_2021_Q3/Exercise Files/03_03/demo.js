var fs = require('fs')

var data = {
    name: 'Bob'
}
// JSON.stringify converts from plain text to JSON Object
fs.writeFile('data.json', JSON.stringify(data), (err) =>{
    console.log('write finished', err)
})