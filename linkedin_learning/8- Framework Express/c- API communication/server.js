var express = require('express')
var app = express()

app.use(express.static(__dirname))


var messages = [
    {name: 'Lucas', message: 'Hello!'},
    {name: 'Pepe', message: 'Goodbye!'}
]

app.get('/messages', (request, response) => {
    response.send(messages);
});



// This should be always on the bottom of this file
var server = app.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
})