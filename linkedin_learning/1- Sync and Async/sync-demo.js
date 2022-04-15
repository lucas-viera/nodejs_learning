fs = require('fs');

data = fs.readdirSync('/home/lucas/Downloads');

console.log('data: ', data);
console.log('this comes after');