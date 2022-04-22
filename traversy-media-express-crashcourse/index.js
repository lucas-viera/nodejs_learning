const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');

const app = express();

app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

app.use(logger);

// Body-Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Homepage Route
app.get('/', (req, res) =>
  res.render('index', {
    title: 'Member App',
    members
  })
);

//Create a route
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// }); 


// const members = [
//     {
//       id: 1,
//       name: 'John Doe',
//       email: 'john@gmail.com',
//       status: 'active'
//     },
//     {
//       id: 2,
//       name: 'Bob Williams',
//       email: 'bob@gmail.com',
//       status: 'inactive'
//     },
//     {
//       id: 3,
//       name: 'Shannon Jackson',
//       email: 'shannon@gmail.com',
//       status: 'active'
//     }
//   ];

//Static folder for middleware
app.use(express.static(path.join(__dirname,'public')));

//this helps to reduce members.js code
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5005;
app.listen(PORT,() => console.log(`Server running on port ${PORT}`));