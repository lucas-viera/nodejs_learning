[Official website](https://expressjs.com/)

To install **Express** inside our project folder and save it to `package.json` file:

`npm init --yes`

`npm install -s express`

Now we got:
```json
{
  "name": "static-serving",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.3"
  }
}
```

In  `server.js` we configure de express service but it will not serve anything yet.

```javascript
var express = require ('express');
var app = express();
var port_listen = 3000;
app.listen(port_listen)
```

We add `app.use(express.static(__dirname));
` to serve a `HTML` file located within de same directory.

Also, we added a callback to the `app.listen` so we can trace it from the VSCode terminal :

```javascript
var server = app.listen(port_listen, () => {
    console.log("Server is listenting on port", server.address().port)
});
```

And in terminal we get:
```
[nodemon] starting `node server.js`
Server is listenting on port 3000
```