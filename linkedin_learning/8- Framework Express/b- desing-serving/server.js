var express = require ('express');
var app = express();
var port_listen = 3000;


app.use(express.static(__dirname));

var server = app.listen(port_listen, () => {
    console.log("Server is listenting on port", server.address().port)
});

