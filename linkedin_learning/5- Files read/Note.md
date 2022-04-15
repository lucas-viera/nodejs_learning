We create `data.json` file as an example to read.

This will fail:

```javascript
fs.readFile('./data.json', (err, data) =>{
    console.log(data)
});

```

Because we did not specified UTF-8 file format as parameter.

```javascript
fs.readFile('./data.json', 'utf-8', (err, data) => {
    console.log(data)
});
```

