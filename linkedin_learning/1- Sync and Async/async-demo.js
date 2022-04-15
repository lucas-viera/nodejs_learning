fs = require('fs');

function testAsync (err, data){
    console.log('data: ', data);
}

fs.readdir('/home/lucas/Downloads', testAsync);

console.log('this comes after');