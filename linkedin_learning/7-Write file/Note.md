We tried to write a `json` file using

```javascript
var fs = require('fs');

var data ={
    name: 'Lucas'
};

fs.writeFile('data.json', data);
```

But to write as that, we need data a String, not as an Object. So we did:

```javascript
var fs = require('fs');

var data ={
    name: 'Lucas'
};

fs.writeFile('data.json', JSON.stringify(data));
```

It will still need a `callback` so we added:

```javascript
fs.writeFile('data.json', JSON.stringify(data), (err) => {
    console.log('writing ended', err);
});
```