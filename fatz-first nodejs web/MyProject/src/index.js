const express = require('express');
const app = express();
const path = require('path');

//Settings
app.set('port', 4000);  
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
// Middlewares


//Routes
// app.get('/', (req, res) => {
//     //res.sendFile(path.join(__dirname, 'views/index.html'))
    
//     //title will be input for index.ejs file
//     res.render('index', {title : 'Hello from node'}); 
// });

app.use(require('./routes'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//Server listening
app.listen(app.get('port'), () => {
    console.log('Server running on port', app.get('port'));
})