var express = require ('express');
var app = express();
var app_port = 3000;

app.use(express.static(__dirname));

var server = app.listen(app_port, ()=>{
    console.log('Sever running on port', server.address().port)
});