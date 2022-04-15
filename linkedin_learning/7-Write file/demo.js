var fs = require('fs');

var data = {
    name: 'Lucas'
};

fs.writeFile('data.json', JSON.stringify(data), (err) => {
    console.log('writing ended', err);
});