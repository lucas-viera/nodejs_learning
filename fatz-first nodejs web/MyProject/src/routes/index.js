const express = require('express');
const router = express.Router();

//Routes
router.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, 'views/index.html'))
    
    //title will be input for index.ejs file
    res.render('index', { title : 'First Web Nodejs' }); 
});

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Page' });
});

module.exports = router;
