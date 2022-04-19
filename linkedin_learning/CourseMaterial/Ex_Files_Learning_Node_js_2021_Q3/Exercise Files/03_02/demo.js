var fs = require('fs')

fs.readdir('/home/lucas/Downloads', (err, data) => {
    console.log(data)
})